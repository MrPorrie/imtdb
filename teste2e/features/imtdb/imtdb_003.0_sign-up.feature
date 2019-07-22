@singup
Feature: login

  Scenario: Go to the begin page and check the imtdb logo
    Given Wait for Angular enabled is false
    Given I navigate to the begin page
    Then The element with the css ".logo" becomes visible

  Scenario: Go to the login page
    Given I click the "[href='/signup']" selector

  Scenario Outline: Check the header and page elements
    Given The element with the css "<header-elements>" becomes visible
    Examples:
      | header-elements  |
      | [href='/signup'] |
      | [href='/login']  |
      # ----- Specific page elements -----
      | [for='username'] |

    #TODO finish sign-up
