@login
Feature: login

  Scenario: Go to the begin page and check the imtdb logo
    Given Wait for Angular enabled is false
    Given I navigate to the begin page
    Then The element with the css ".logo" becomes visible

  Scenario: Go to the login page
    Given I click the "[href='/login']" selector

  Scenario Outline: Check the header and page elements
    Given The element with the css "<header-elements>" becomes visible
    Examples:
      | header-elements  |
      | [href='/signup'] |
      | [href='/login']  |
      | .header__title   |
      # ----- Specific page elements -----
      | .login           |

  Scenario: Login with wrong credentials and press the retry button
    Given I fill in incorrect credentials
    And I click the ".cta__container button" selector

  Scenario: Login with the correct credentials
    Given I fill in my crendentials - by arguments


