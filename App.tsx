import { StyleSheet, Text, View } from 'react-native';

import Alaune from './component/Alaune';
import Rubrique from './component/Rubrique';

export default function App() {
  return (
    <View style={styles.container}>
      
       <Alaune
          title="Yango une app tout-en-un!"
              description="Découvrez notre offre exclusive pour les nouveaux utilisateurs."
              imageUrl="https://img.freepik.com/free-psd/travel-tourism-instagram-post-social-media-post-template_106176-2406.jpg?t=st=1732177758~exp=1732181358~hmac=639024ff782a4e37b201a746b4c42c8fe77fd459d3598cfbd71d869a71bfada5&w=740" // Remplacez par l'URL de votre image
            />
  <Rubrique></Rubrique>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
