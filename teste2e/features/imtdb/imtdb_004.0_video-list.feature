@videolist
Feature: login

  Scenario: Go to the begin page and check the imtdb logo
    Given Wait for Angular enabled is false
    Given I navigate to the begin page
    Then The element with the css ".logo" becomes visible

  Scenario: Go to the video list page
    Given I click the "#app > div > section > button" selector

  Scenario Outline: Check the header and page elements
    Given The element with the css "<header-elements>" becomes visible
    Examples:
      | header-elements    |
      | [href='/signup']   |
      | [href='/login']    |
      | .header__title     |
      # ----- Specific page elements -----
      | .movies            |
      | .movie__details h3 |


    #TODO search movies
