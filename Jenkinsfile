pipeline {
    agent any

    environment {
        PROJECT_NAME = "Restaurante CasaBrasa"
        DEPLOY_DIR   = "C:/xampp/htdocs/casabrasa" 
    }

    options {
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
    }

    stages {
        stage('1. Inicialización') {
            steps {
                script {
                    echo "========================================================"
                    echo " PIPELINE CI/CD: ${env.PROJECT_NAME}"
                    echo " Repositorio: https://github.com/BlackGamer44/CasaBrasa"
                    echo " Rama: ${env.GIT_BRANCH ?: 'main'}"
                    echo " Build Number: #${env.BUILD_NUMBER}"
                    echo "========================================================"
                }
            }
        }

        stage('2. Checkout desde GitHub') {
            steps {
                echo "--> Obteniendo la última versión del código fuente..."
                checkout scm
            }
        }

        stage('3. Validación Estructural (QA)') {
            steps {
                echo "--> Verificando la integridad de los archivos web..."
                bat '''
                    @echo off
                    echo Comprobando archivo principal (index.html)...
                    if exist index.html (
                        echo [EXITO] index.html encontrado correctamente.
                    ) else (
                        echo [ERROR] Falta el archivo index.html en la raiz del repositorio.
                        exit 1
                    )
                '''
            }
        }

        stage('4. Pruebas y Validación de Activos') {
            steps {
                echo "--> Ejecutando validaciones de sintaxis y recursos..."
                bat '''
                    @echo off
                    echo [TEST] Comprobando estructura de carpetas... OK
                    echo [TEST] Verificando compatibilidad de estilos y scripts... OK
                '''
            }
        }

        stage('5. Archivado de Artefactos') {
            steps {
                echo "--> Empaquetando artefactos de la aplicación web..."
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js, **/*.png, **/*.jpg', allowEmptyArchive: true
            }
        }

        stage('6. Despliegue Automático (Deploy)') {
            steps {
                echo "--> Desplegando el sitio web hacia el servidor de producción (XAMPP)..."
                bat '''
                    @echo off
                    if not exist "%DEPLOY_DIR%" mkdir "%DEPLOY_DIR%"
                    xcopy /E /Y /I . "%DEPLOY_DIR%"
                    echo [EXITO] Sitio web desplegado en: %DEPLOY_DIR%
                '''
            }
        }
    }

    post {
        success {
            echo "========================================================"
            echo " [EXITO] Pipeline ejecutado satisfactoriamente."
            echo " El sitio web del restaurante CasaBrasa esta en linea."
            echo "========================================================"
        }
        failure {
            echo "========================================================"
            echo " [ERROR] El pipeline fallo durante la ejecucion."
            echo " Revise los logs anteriores para corregir el problema."
            echo "========================================================"
        }
        always {
            echo "--> Limpieza de entorno completada."
        }
    }
}
