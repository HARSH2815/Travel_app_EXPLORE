import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [username, setUsername] = useState('Harsh Prasad');
  const [email, setEmail] = useState('harsh.gis9000@gmail.com');
  const [bio, setBio] = useState('Bio:Lorem ipsum dolor sit amet, consectetur adipiscing.');
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newBio, setNewBio] = useState(bio);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setUsername(newUsername);
    setEmail(newEmail);
    setBio(newBio);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        {isEditing && (
          <TouchableOpacity onPress={handleSave}>
            <MaterialIcons name="done" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <TouchableOpacity onPress={() => alert('Change profile picture')}>
          <Image
            source={require('../assets/images/PROFILE.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        {isEditing ? (
          <TextInput
            style={styles.input}
            value={newUsername}
            onChangeText={text => setNewUsername(text)}
            placeholder="Username"
          />
        ) : (
          <Text style={styles.username}>{username}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={newEmail}
            onChangeText={text => setNewEmail(text)}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        ) : (
          <Text style={styles.email}>{email}</Text>
        )}
        {isEditing ? (
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={newBio}
            onChangeText={text => setNewBio(text)}
            placeholder="Bio"
            multiline
            numberOfLines={4}
          />
        ) : (
          <Text style={styles.bio}>{bio}</Text>
        )}
      </View>

      {/* Edit Button */}
      {!isEditing && (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
    paddingTop: 55,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 35,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontFamily:'outfit-medium',
    fontSize: 24,
    marginTop: 10,
  },
  email: {
    fontFamily:'outfit-regular',
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  bio: {
    fontFamily:'outfit-regular',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    fontSize: 18,
    fontFamily:'outfit-medium'
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  editButtonText: {
    fontFamily:'outfit-medium',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ProfileScreen;
