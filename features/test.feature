# features/test.feature
Feature: Google Search in Workstation
  As a SET
  I would like to check the google search in Workstation
  In order to prove the capability of this Test Infrastructure

  Scenario: Google Search in Workstation
    Given I launched Workstation
    When I search for MicroStrategy
    Then Result Popup should be displayed
    Then I expand menu inside the popup
    Then I quit Workstation