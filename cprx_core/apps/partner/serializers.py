from rest_framework import serializers

from .models import Partner
from .models import Education
from .models import Licenses
from .models import Certifications
from .models import Skills
from .models import SkillsList
from .models import References
from .models import LoginSecurity


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        read_only_fields = (
            "created_at",
            "modified_at",
        ),
        fields = (
            "id",
            "first_name",
            "last_name",
            "middle_initial",
            "date_of_birth",
            "phone_number",
            "address_line_1",
            "address_line_2",
            "can_call_text",
            "city",
            "region",
            "country",
            "zip_code",
            "get_full_name"
        )


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = (
            "id",
            "school_name",
            "field_name",
            "year_graduated",
            "region",
            "country",
            "degree_type"
        )


class LicensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Licenses
        fields = (
            "id",
            "license_code",
            "license_name",
            "is_compact",
            "expiration_date",
            "region",
            "country",
            "is_active"
        )


class CertificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = (
            "id",
            "cert_code",
            "cert_name",
            "expiration_date",
            "region",
            "country",
            "is_active"
        )


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = (
            "id",
            "skill_name"
        )


class SkillsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillsList
        fields = (
            "id",
            "skill_name"
        )


class ReferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = References
        fields = (
            "id",
            "name",
            "phone_number",
            "email",
            "facility_name",
            "start_date",
            "end_date"
        )


class LSSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginSecurity
        fields = (
            "id",
            "email",
            "alt_email",
            "phone_number",
            "is_email_verified",
            "is_phone_verified",
            "secret_question_1",
            "secret_question_2",
            "secret_answer_1",
            "secret_answer_2"
        )
