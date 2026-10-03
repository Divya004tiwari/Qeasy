import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function viewUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const db = mongoose.connection.db;
    const users = db.collection('users');
    
    const allUsers = await users.find({}).toArray();
    
    console.log('📊 ALL USERS IN DATABASE:');
    console.log('='.repeat(80));
    
    allUsers.forEach((user, index) => {
      console.log(`\n👤 User #${index + 1}:`);
      console.log(`   📧 Email:    ${user.email}`);
      console.log(`   👤 Name:     ${user.fullName}`);
      console.log(`   🔑 Role:     ${user.role}`);
      console.log(`   ✅ Active:   ${user.isActive ? 'Yes' : 'No'}`);
      console.log(`   📱 Phone:    ${user.phone || 'N/A'}`);
      console.log(`   📅 Created:  ${new Date(user.createdAt).toLocaleString()}`);
      console.log(`   🆔 ID:       ${user._id}`);
      if (user.role === 'admin') {
        console.log(`   🔐 DEFAULT PASSWORD: admin123`);
      }
      console.log('-'.repeat(50));
    });
    
    console.log(`\n📊 Total Users: ${allUsers.length}`);
    
    // Check if admin exists
    const admin = allUsers.find(u => u.role === 'admin');
    if (!admin) {
      console.log('\n⚠️  NO ADMIN USER FOUND! Creating one...');
      
      // Create admin
      const bcrypt = (await import('bcryptjs')).default;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      const newAdmin = {
        fullName: 'Super Admin',
        email: 'admin@Qeasy.com',
        password: hashedPassword,
        role: 'admin',
        phone: '9999999999',
        age: 30,
        isActive: true,
        createdAt: new Date()
      };
      
      await users.insertOne(newAdmin);
      console.log('✅ ADMIN CREATED: admin@Qeasy.com / admin123');
    }
    
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

viewUsers();