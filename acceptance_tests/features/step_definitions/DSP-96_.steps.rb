Given(/^that on step one I had selected that I am inside the UK$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
  click_button('Start')
  choose('UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  click_button('Continue')  
  click_button('Submit')
end

Then(/^I am on the inside the UK confirmation page$/) do
  page.should have_content('When you are back in UK you should then apply for a replacement BRP within 1 month.')

end

Then(/^I am on the outside the UK confirmation page$/) do
  page.should have_no_content('When you are back in UK you should then apply for a replacement BRP within 1 month.')
  page.should have_content('We keep your personal data secure according to our privacy policy.')
end

Given(/^that on step one I had selected that I am outside the UK$/) do                                                
  visit config['lost_host']
  # page.status_code.should == 200
  click_button('Start')
  choose('Outside UK')
  click_button('Continue')
  fill_in('date-lost-day', :with => '17')
  fill_in('date-lost-month', :with => '08')
  fill_in('date-lost-year', :with => '1988')
  click_button('Continue')
  fill_in('fullname', :with => 'Alex Murphy')
  fill_in('date-of-birth-day', :with => '17')
  fill_in('date-of-birth-month', :with => '08')
  fill_in('date-of-birth-year', :with => '1988')
  fill_in('nationality', :with => 'Chinese')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  click_button('Continue')
  fill_in('email', :with => 'alex.murphy@uk.sogeti.com')
  click_button('Continue')  
  click_button('Submit') 
end