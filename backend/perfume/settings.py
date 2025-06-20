
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()
# SECRET_KEY = os.environ.get('SECRET_KEY')
SECRET_KEY = 'django-insecure-q8p9nzirhqvgk^gg!y!0kj8-4fark1iqbzcyy(y^02r8(hyk^@'


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

if DEBUG:
	ALLOWED_HOSTS = []
else:
    ALLOWED_HOSTS = [
			'ecommerce.gaidysheff.ru', 'www.ecommerce.gaidysheff.ru', 
			'test.gaidysheff.ru', 'www.test.gaidysheff.ru',
			'weather.gaidysheff.ru', 'www.weather.gaidysheff.ru',
			]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
	# External Packages
	'rest_framework',
	'corsheaders',
	'django_countries',
	'drf_spectacular',
	# Internal Apps
	'backend_api.apps.BackendApiConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
	'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'perfume.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        # 'DIRS': [os.path.join(BASE_DIR, 'frontend/dist')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'perfume.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'ru-ru'
# LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
# MEDIA_ROOT = BASE_DIR / 'media'

if DEBUG:
	MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
else:
	MEDIA_ROOT = '../xtina/public_html/media'




# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# REST Framework settings

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
        'rest_framework.permissions.AllowAny'
    ],
	'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
	
	# 'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
	
    # 'DEFAULT_PAGINATION_CLASS': 'backend.backend_api.views.StandardResultsSetPagination',
		
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    # 'PAGE_SIZE': 12
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'online shop KEST',
    'DESCRIPTION': 'Your project description',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    # OTHER SETTINGS
}

# CORS settings
if DEBUG:
	CORS_ALLOW_ALL_ORIGINS = True
else:
	CORS_ALLOWED_ORIGINS = [
			'https://ecommerce.gaidysheff.ru', 'https://www.ecommerce.gaidysheff.ru', 
			'https://test.gaidysheff.ru', 'https://www.test.gaidysheff.ru',
			'https://weather.gaidysheff.ru', 'https://www.weather.gaidysheff.ru',
			]

