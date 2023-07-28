import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

interface FormValues {
  title: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const showToast = (status: boolean) => {
  if (status) {
    Toast.show({
      type: 'success',
      text1: 'Signup successfully',
    });
  } else {
    Toast.show({
      type: 'error',
      text1: 'Signup failed',
    });
  }
};

const AuthForm = () => {
  const initialValues: FormValues = {
    title: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSignup = async (values: FormValues) => {
    try {
      console.log(values);
      await axios.post('http://192.168.1.46:4000/users', values);
      showToast(true);
    } catch (err) {
      showToast(false);
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, {resetForm}) => {
          handleSignup(values);
          resetForm();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <Text style={styles.headerTop}>Get Started</Text>
              <Text>by creating a free account</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                placeholder="Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                placeholder="First name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                placeholder="Last name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                placeholder="Role"
                onChangeText={handleChange('role')}
                onBlur={handleBlur('role')}
                value={values.role}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TextInput
                placeholderTextColor="rgba(0, 0, 0, 0.50)"
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />

              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => {
                  handleSubmit();
                }}>
                <Text style={styles.btnLabel}>Signup</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text>
                Already a member? <Text style={styles.loginLink}>Log In</Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    fontFamily: 'Montserrat',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 36,
  },
  headerTop: {
    fontSize: 36,
    fontWeight: '500',
    color: '#252525',
  },
  content: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  input: {
    backgroundColor: '#rgba(196, 196, 196, 0.20)',
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: '7.3%',
    paddingRight: '4.3%',
  },

  btnSubmit: {
    flex: 1,
    backgroundColor: 'rgba(108, 99, 255, 1)',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnLabel: {
    color: 'rgba(252, 252, 252, 1)',
    fontSize: 20,
    fontWeight: '600',
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(37, 37, 37, 1)',
  },

  loginLink: {
    color: 'rgba(108, 99, 255, 1)',
    fontWeight: '700',
  },
});

export default AuthForm;
