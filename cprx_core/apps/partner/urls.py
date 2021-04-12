from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import PartnerViewset
from .views import EducationViewset
from .views import LicensesViewset
from .views import CertificationsViewset

router = DefaultRouter()

router.register("personal", PartnerViewset, basename="personal")
router.register("education", EducationViewset, basename="education")
router.register("licenses", LicensesViewset, basename="licenses")
router.register("certifications", CertificationsViewset,
                basename="certifications")

urlpatterns = [
    path('', include(router.urls)),
]
