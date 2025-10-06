pipeline {
    agent any
    stages {
        stage('One') {
            steps {
                echo 'Stage One'
            }
        }
        stage('Two') {
            when {
                expression {
                    BRANCH_NAME == 'main' && CODE_CHANGED == true
                }
            }
            steps {
                echo 'Stage Two'
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