When(/^I go to Step Five of the error form$/) do                               
  visit config['correct_mistakes_host']
  page.should have_content('Step 1 of 6')
  choose('UK')
  click_button('Continue')
  # page.status_code.should == 200
  check('last-name-error-checkbox')
  fill_in('last-name-error', :with => 'reasonable')
  click_button('Continue')
  choose('uk-address-radio-yes')
  fill_in('uk-address-street', :with => '2 Marsham Street')
  fill_in('uk-address-town', :with => 'Westminster')
  fill_in('uk-address-postcode', :with => 'SW1P 4DF')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
end                                                                          
                                                                             
Then(/^I am on Step Five of the error form$/) do
  page.should have_content('Step 5 of 6')
  delete_cookie('hmbrp.sid')
end                                                                          