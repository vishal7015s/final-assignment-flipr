const Newsletter = require('../models/NewsLetter');

exports.addNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email already exists
    const existingEmail = await Newsletter.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newSubscription = await Newsletter.create({ email });

    res.status(201).json({
      message: 'Subscribed successfully',
      data: newSubscription,
    });
  } catch (error) {
    console.error('Error adding newsletter subscription:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};

exports.getAllNewsletters = async (req, res) => {
  try {
    const subscriptions = await Newsletter.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json({
      message: 'Newsletter subscriptions fetched successfully',
      data: subscriptions,
    });
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};