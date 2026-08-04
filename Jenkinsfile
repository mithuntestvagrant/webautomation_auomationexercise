pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
    }

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
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test ${params.TEST_FILE}"
            }
        }
    }
}