When(/^I go to Step Three of the error form$/) do
  visit config['correct_mistakes_host']
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  # page.status_code.should == 200
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  # page.status_code.should == 302
end

Then(/^I am on Step Three of the error form$/) do
  page.should have_content('Step 3 of 6')
  delete_cookie('hmbrp.sid')
end

When(/^I fill in the address fields on the Error form$/) do
  choose('same-address-radio-no')
  complete_address_fields_with_prefix "same-"
end
