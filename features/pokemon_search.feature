Feature: Pokémon Search
  As a user
  I want to search for Pokémon
  So that I can view their information

  Scenario: Successful Pokémon search
    Given I am on the Pokémon search page
    When I enter "pikachu" in the search input
    And I click the search button
    Then I should see the Pokémon name "Pikachu"
    And I should see the Pokémon image

  Scenario: Pokémon not found
    Given I am on the Pokémon search page
    When I enter "invalidpokemon" in the search input
    And I click the search button
    Then I should see an error message "Pokémon not found"