from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class Partner(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    middle_initial = models.CharField(max_length=10)
    date_of_birth = models.DateTimeField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    address_line_1 = models.CharField(max_length=255, blank=True, null=True)
    address_line_2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    can_call_text = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    modified_at = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def get_full_name(self):
        return (f"{ self.first_name } { self.middle_initial }. { self.last_name }")

    def __str__(self):
        return (f"{ self.first_name } { self.last_name }")


class Education(models.Model):
    HIGHSCHOOL = 'highschool'
    ASSOCIATE = 'associate'
    BACHELOR = 'bachelor'
    MASTER = 'master'
    DOCTORATE = 'doctorate'

    DEGREE_TYPES = (
        (HIGHSCHOOL, 'Highschool'),
        (ASSOCIATE, 'Associate'),
        (BACHELOR, 'Bachelor'),
        (MASTER, 'Master'),
        (DOCTORATE, 'Doctorate'),
    )

    degree_type = models.CharField(
        max_length=20, choices=DEGREE_TYPES, default=BACHELOR)
    school_name = models.CharField(max_length=255, blank=True, null=True)
    field_name = models.CharField(max_length=255, blank=True, null=True)
    year_graduated = models.CharField(max_length=20, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(
        User, related_name='education', on_delete=models.CASCADE)

    def __str__(self):
        return self.school_name


class Licenses(models.Model):
    license_name = models.CharField(max_length=255, blank=True, null=True)
    license_code = models.CharField(max_length=255, blank=True, null=True)
    is_compact = models.BooleanField(blank=True, null=True, default=False)
    expiration_date = models.DateTimeField(blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(
        User, related_name='licenses', on_delete=models.CASCADE)

    def is_active(self):
        now = timezone.now()
        if (self.expiration_date) and (self.expiration_date < now):
            return False
        return True

    def __str__(self):
        return self.license_name


class Certifications(models.Model):
    cert_name = models.CharField(max_length=255, blank=True, null=True)
    cert_code = models.CharField(max_length=255, blank=True, null=True)
    expiration_date = models.DateTimeField(blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(
        User, related_name='certifications', on_delete=models.CASCADE)

    def is_active(self):
        now = timezone.now()
        if (self.expiration_date) and (self.expiration_date < now):
            return False
        return True

    def __str__(self):
        return self.cert_name


class Skills(models.Model):
    skill_name = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(
        User, related_name='skills', on_delete=models.CASCADE)

    def __str__(self):
        return self.skill_name


class SkillsList(models.Model):
    skill_name = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.skill_name


class References(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    position = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    facility_name = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(
        User, related_name='references', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class LoginSecurity(models.Model):
    email = models.CharField(max_length=255, blank=True, null=True)
    alt_email = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    secret_question_1 = models.CharField(max_length=255, blank=True, null=True)
    secret_question_2 = models.CharField(max_length=255, blank=True, null=True)
    secret_answer_1 = models.CharField(max_length=255, blank=True, null=True)
    secret_answer_2 = models.CharField(max_length=255, blank=True, null=True)
    is_email_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)
    user = models.ForeignKey(
        User, related_name='login_security', on_delete=models.CASCADE)

    def __str__(self):
        return self.phone_number
