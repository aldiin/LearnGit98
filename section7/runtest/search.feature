Feature: Search

    As a user
    i want search

    Scenario: Search Result
        Given  I open index page
        When  I fill search field
        Then I should see search result page
