Feature: Login function

  Background: 
    Given User navigates to the application
    And User clicks on the practice link text
    And User clicks on the Test Login Page link text

  Scenario Outline: Login successful
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    When User clicks on the submit button
    Then User should navigates to successful login page

    Examples: 
      | username | password    |
      | student  | Password123 |

  Scenario Outline: Login fail
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    When User clicks on the submit button
    Then User should see error message with incorrect "<input>"

    Examples: 
      | username      | password          | input    |
      | incorrectUser | Password123       | username |
      | student       | incorrectPassword | password |
