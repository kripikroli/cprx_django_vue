from rest_framework import serializers

from .models import Partner
from .models import Education
from .models import Licenses
from .models import Certifications
from .models import Skills
from .models import SkillsList


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
            "country"
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
