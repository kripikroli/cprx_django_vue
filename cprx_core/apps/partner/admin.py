from django.contrib import admin

from .models import Partner
from .models import Education
from .models import Licenses
from .models import Certifications
from .models import Skills
from .models import SkillsList
from .models import References
from .models import LoginSecurity

admin.site.register(Partner)
admin.site.register(Education)
admin.site.register(Licenses)
admin.site.register(Certifications)
admin.site.register(Skills)
admin.site.register(SkillsList)
admin.site.register(References)
admin.site.register(LoginSecurity)
