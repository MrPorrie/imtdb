@smoke
Feature: Smoke

  Scenario: Go to the begin page and check the imtdb logo
    Given Wait for Angular enabled is false
    Given I navigate to the begin page
    Then The element with the css ".logo" becomes visible

  Scenario Outline: Check the header and page elements
    Given The element with the css "<header-elements>" becomes visible
    Examples:
      | header-elements           |
      | [href='/signup']          |
      | [href='/login']           |
      | .header__title            |
      | .sneek-preview__container |

  Scenario Outline: Check the begin page titles
    Given The element with the "<element>" style contains the following text "<title>"
    Examples:
      | element                       | title           |
      | .header__title                | Movies          |
      | [href='/signup']              | Sign Up         |
      | [href='/login']               | Login           |
      | #app > div > section > button | List all movies |

