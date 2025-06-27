import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

const UploadScreen: React.FC = () => {
  const [photo, setPhoto] = useState<Asset | null>(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel || response.errorCode || !response.assets) {
        console.log('Không chọn ảnh hoặc có lỗi');
        return;
      }

      setPhoto(response.assets[0]);
    });
  };

  const handleUpload = async () => {
    if (!photo || !photo.uri || !photo.type || !photo.fileName) {
      Alert.alert('Vui lòng chọn ảnh hợp lệ');
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: photo.uri,
      name: photo.fileName,
      type: photo.type
    } as any); // Cast để tránh lỗi TS

    try {
      const res = await fetch('http://192.168.2.175/api/upload.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      });

      const data = await res.json();
      Alert.alert(data.message || 'Tải ảnh thành công');
    } catch (err) {
      console.error(err);
      Alert.alert('Lỗi khi upload ảnh');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Chọn ảnh" onPress={handleChoosePhoto} />
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 200, height: 200, marginVertical: 10 }}
        />
      )}
      <Button title="Tải ảnh lên" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UploadScreen;
