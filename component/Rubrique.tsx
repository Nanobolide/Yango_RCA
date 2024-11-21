import { StyleSheet, Text, View, Image } from 'react-native';

export default function Rubrique() {
   return (
      <View style={styles.container}>
         
         <View style={[styles.box, styles.box1]}>
            <Text style={styles.text}>Section 1</Text>
            <View>
               <Image 
                  source={{ uri: 'https://img.freepik.com/free-vector/realistic-news-studio-background_23-2149985612.jpg?t=st=1732178020~exp=1732181620~hmac=6de5c4bb625a925d3116ccbc24579a9cfa7e6e9747d3fa6413c04c0e6a8fc622&w=900' }} 
                  style={styles.image} 
               />
            </View>
         </View>

        
         <View style={[styles.box, styles.box2]}>
            <Text style={styles.text}>Section 2</Text>
            <Text style={styles.textColor}> 
               Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content
            </Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  
    justifyContent: 'center',
    padding: 16,
    
  },
  box: {
    width: '50%', 
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8, 
  },
  box1: {
    backgroundColor: '#3498db', // Fond bleu
  },
  box2: {
    backgroundColor: '#2ecc71', // Fond vert
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textColor: {
    color: 'white', 
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  }
});
