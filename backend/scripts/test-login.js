import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const testLogin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const db = mongoose.connection.db;
    const usersCollection = db.collection('users');

    // Test credentials
    const testEmail = 'admin@Qeasy.com';
    const testPassword = 'admin123';

    // Find user
    const user = await usersCollection.findOne({ email: testEmail });
    
    if (!user) {
      console.log('❌ User not found!');
      process.exit(1);
    }

    console.log('\n📋 USER FOUND:');
    console.log(`   Email: ${user.email}`);
    console.log(`   Role: ${user.role}`);
    console.log(`   Name: ${user.fullName}`);
    console.log(`   Hashed Password: ${user.password.substring(0, 20)}...`);

    // Test password
    const isMatch = await bcrypt.compare(testPassword, user.password);
    
    console.log('\n🔐 PASSWORD TEST:');
    console.log(`   Input password: ${testPassword}`);
    console.log(`   Password match: ${isMatch ? '✅ YES' : '❌ NO'}`);

    if (isMatch) {
      console.log('\n✅ LOGIN WOULD SUCCEED!');
    } else {
      console.log('\n❌ LOGIN WOULD FAIL - Password incorrect');
      
      // Create new hash for reference
      const salt = await bcrypt.genSalt(10);
      const newHash = await bcrypt.hash(testPassword, salt);
      console.log('\n📝 For reference, correct hash would be:');
      console.log(newHash);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

testLogin();