50.times do
  User.create(
    name: Faker::Name.first_name,
    nickname: Faker::Internet.username,
    email: Faker::Internet.email,
    password: "password",
    image: Faker::Avatar.image,
  )
end

puts "50 users created"