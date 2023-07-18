Feature: The Bendigo Bank Website
  @demo
  Scenario Outline: As a user, I can log into the bendigo bank
    Given I am on the login page
    Then Click on Banking
    Then I Select CreditCards
    Then Click on Applynow
    Then Click on ContinueApply
    When Start to fill the details
    Then I Fill Time & Eligibility screen
    Then click on Continue and Fill the details

    Examples:
      | TestID      | password             | message                        |
      | BENDIGI_001 | SuperSecretPassword! | You logged into a secure area! |
