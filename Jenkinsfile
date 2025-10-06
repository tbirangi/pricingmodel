pipeline {
    agent any
    stages {
        stage('One') {
            steps {
                echo 'Stage One'
            }
        }
        stage('Two' {
            when {
                expression {
                    BRANCH_NAME == 'main'
                }
            }
            steps {
                echo 'Stage Two'
            }
        }
        stage('Three' {
            when {
                expression {
                    BRANCH_NAME == 'dev'
                }
            }
            steps {
                echo 'Stage Three'
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