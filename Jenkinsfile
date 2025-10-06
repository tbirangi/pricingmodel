
pipeline {
    agent any
    environment {
        CODE_CHANGES = true
        NEW_VERSION = '1.0.1'
    }
    stages {
        stage('One') {
            steps {
                echo 'Stage One'
                echo "CODE_CHANGES: ${CODE_CHANGES}"
                echo "NEW_VERSION: ${NEW_VERSION}"
            }
        }
        stage('Two') {
            when {
                expression {
                    BRANCH_NAME == 'main' && CODE_CHANGES == true
                }
            }
            steps {
                echo 'Stage Two'
                echo "CODE_CHANGES: ${CODE_CHANGES}"
                echo "NEW_VERSION: ${NEW_VERSION}"
            }
        }
        stage('Three') {
            when {
                expression {
                    BRANCH_NAME == 'dev' || BRANCH_NAME == 'main'
                }
            }
            steps {
                echo 'Stage Three'
                echo "CODE_CHANGES: ${CODE_CHANGES}"
                echo "NEW_VERSION: ${NEW_VERSION}"
            }
        }
        stage('Four') {
            when {
                expression {
                    BRANCH_NAME == 'dev'
                }
            }
            steps {
                echo 'Stage Four'
            }
        }
    }
    post {
        always {
            echo 'Post...'
        }
        success {
            echo 'Success...'
        }
        failure {
            echo 'Failure...'
        }
        unstable {
            echo 'Unstable...'
        }
        changed {
            echo 'Changed...'
        }
    }
}