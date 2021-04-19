from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import PartnerViewset
from .views import EducationViewset
from .views import LicensesViewset
from .views import CertificationsViewset
from .views import SkillsViewset
from .views import SkillsListViewset
from .views import ReferencesViewset
from .views import LSViewset

router = DefaultRouter()

router.register("personal", PartnerViewset, basename="personal")
router.register("education", EducationViewset, basename="education")
router.register("licenses", LicensesViewset, basename="licenses")
router.register("certifications", CertificationsViewset,
                basename="certifications")
router.register("skills", SkillsViewset, basename="skills")
router.register("skills-list", SkillsListViewset, basename="skills-list")
router.register("references", ReferencesViewset, basename="references")
router.register("login-security", LSViewset, basename="login-security")

urlpatterns = [
    path('', include(router.urls)),
]
