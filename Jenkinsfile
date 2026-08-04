pipeline {
    agent any

    parameters {
        string(
            name: 'TEST_FILE',
            defaultValue: 'tests/contactUs.spec.ts',
            description: 'Enter the Playwright test file'
        )
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test ${params.TEST_FILE}"
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true
        }
    }
}