import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('user', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  updateUserCurrency(userCurrencyData) {
    return Api().post('updateUserCurrency', userCurrencyData);
  },
  uploadProfilePicture(formData) {
    return Api().post('uploadProfilePicture', formData);
  },
  getProfilePicture(useremail) {
    return Api().get(`profilePictures/${useremail}.jpg`, { responseType: 'blob' });
  },
  updateUserNotification(notificationData) {
    return Api().post('updateUserNotification', notificationData);
  },
  getCryptoData(useremail) {
    return Api().get(`getCryptoData?useremail=${useremail}`);
  },
  updatePhoneNumber(credentials){
    return Api().put('updatePhoneNumber', credentials);
  },
  updateCryptoValues(cryptoValues) {
    return Api().post('updateCryptoValues', cryptoValues);
  },
  updateUserName(data) {
    return Api().put('updateUserName', data);
  },
  updateUserEmail(data) {
    return Api().put('updateUserEmail', data);
  }
  
};
