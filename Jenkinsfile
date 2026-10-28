pipeline {
    agent any

    stages {
        stage('1. Checkout Code') {
            steps {
                echo '=== Descargando el código del sitio web del restaurante desde GitHub ==='
                checkout scm
            }
        }

        stage('2. Validar Archivos') {
            steps {
                echo '=== Verificando que existan los archivos principales ==='
                // En Windows/PowerShell verificamos la existencia de los archivos clave
                bat 'if exist index.html (echo "index.html encontrado") else (echo "ERROR: Falta index.html" && exit 1)'
            }
        }

        stage('3. Despliegue Local (Demo)') {
            steps {
                echo '=== Simulando el despliegue del menú del restaurante ==='
                echo 'El sitio web está listo para ser mostrado en producción.'
            }
        }
    }

    post {
        success {
            echo '=== BUILD EXITOSO: La demostración para la escuela está lista. ==='
        }
        failure {
            echo '=== BUILD FALLIDO: Revisa que todos los archivos estén subidos al repositorio. ==='
        }
    }
}
