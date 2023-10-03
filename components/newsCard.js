
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

export default function News() {

    const [news, setNews] = React.useState([]);
    

    useEffect(() => {
        async function fetchNews() {
          const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dbc465da365242218415f0751efbd52a');
          const newsData = await response.json();
          setNews(newsData.articles);
        }
    
        fetchNews();
      }, []);


  return (
    <View>
      <Text style={styles.headerText}>Top Headlines</Text>
      <ul>
        {news.map((article) => (
          <View style = {styles.container}>
            <img style ={styles.image} src={article.urlToImage}/>
            <Text key={article.url}>{article.title}</Text>
            <Button style={styles.button} title="View Full Details" onPress={''} />
          </View>
        ))}
      </ul>
    </View>
  );
}


//api key dbc465da365242218415f0751efbd52a


const styles = StyleSheet.create({
  container: {
    width: "80%", 
    marginHorizontal: "10%", 
    backgroundColor: "fffff0",
    marginBottom: 20, 
    padding: 10,
    borderRadius: 10,
    borderWidth:  1
  },
  title: {
    marginTop: '20px',
    color: "#f8f8ff",
    fontWeight: '600'
  },
  image: {
    
    height: '40%',
    width: '100%'
  },
  button: {
    fontWeight: '100'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
