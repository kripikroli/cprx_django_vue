from django.core.exceptions import PermissionDenied

from rest_framework import viewsets

from .serializers import PartnerSerializer
from .serializers import EducationSerializer
from .serializers import LicensesSerializer
from .serializers import CertificationsSerializer
from .serializers import ReferencesSerializer
from .serializers import LSSerializer
from .serializers import SkillsSerializer

from .models import Partner
from .models import Education
from .models import Licenses
from .models import Certifications
from .models import References
from .models import LoginSecurity
from .models import Skills


class PartnerViewset(viewsets.ModelViewSet):
    serializer_class = PartnerSerializer
    queryset = Partner.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class EducationViewset(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    queryset = Education.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class LicensesViewset(viewsets.ModelViewSet):
    serializer_class = LicensesSerializer
    queryset = Licenses.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class CertificationsViewset(viewsets.ModelViewSet):
    serializer_class = CertificationsSerializer
    queryset = Certifications.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class SkillsViewset(viewsets.ModelViewSet):
    serializer_class = SkillsSerializer
    queryset = Skills.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class ReferencesViewset(viewsets.ModelViewSet):
    serializer_class = ReferencesSerializer
    queryset = References.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()


class LSViewset(viewsets.ModelViewSet):
    serializer_class = LSSerializer
    queryset = LoginSecurity.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.user:
            raise PermissionDenied('Wrong object owner')

        serializer.save()
