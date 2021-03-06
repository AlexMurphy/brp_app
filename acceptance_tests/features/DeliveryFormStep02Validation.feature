@DeliveryForm @StepTwo @Validation @DSP-65
Feature: Validation for Step 02 of the Delivery Form

	Background:
		When I go to Step Two of the delivery form

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without doing anything
		When I click Continue
		Then I see the "Tell us if your address is the same as on the letter from the Home Office" link
		And I see "Would you like your BRP sent to the address that is on the letter from the Home Office?"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form have selecting the No radio button having not completed the address fields
		When I check the "No" radio button
		And I click Continue
		Then I see the "Enter your street" link
		And I see the "Enter the town or city" link
		And I see the "Enter the postcode" link
		And I see the "A case ID number is required for your BRP to be sent to a different address" link

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the first address field
		When I check the "No" radio button
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter your street" link
		And I see "Enter your street"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the second address field
		When I check the "No" radio button
		And I fill in the address street field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter the town or city" link
		And I see "Enter the town or city"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the postcode field
		When I check the "No" radio button
		And I fill in the address street field
		And I fill in the second address field
		When I click Continue
		Then I see the "Enter the postcode" link
		And I see "Enter the postcode"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the case-id field
		When I check the "No" radio button
    And I fill in all the address details
		When I click Continue
		Then I see the "A case ID number is required for your BRP to be sent to a different address" link

	Scenario: Attempting to proceed to Step 03 of the Delivery Form having selected the No radio button and completing the required address and case-id fields
		When I check the "No" radio button
    And I fill in all the address details
    And I fill in the case-id field
		When I click Continue
		Then I am on Step Three of the delivery form
