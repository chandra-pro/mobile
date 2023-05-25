import React from 'react';
import { FlatList, View, StyleSheet, ScrollView } from 'react-native';
import { GET_CONTACTS } from '../../graphql/queries/Contact';
import { useQuery } from '@apollo/client';

import Contact from './Contact';
import Loading from './Loading';

export interface Contacts {
  index: number;
  name: string | null;
}

interface ContactListProps {
  navigation: any;
}

const variables = {
  filter: {},
  messageOpts: {
    limit: 3,
    offset: 0,
  },
  contactOpts: {
    limit: 10,
    offset: 0,
  },
};

const ContactList: React.FC<ContactListProps> = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_CONTACTS, { variables });

  if (error) {
    console.log(error);
  }

  const contactItem = ({ item }: { item: Contacts }) => (
    <Contact name={item.name} navigation={navigation} key={item.name} />
  );

  let contacts = [];
  if (data) {
    contacts = data.search.map((element: any, index: number) => ({
      index,
      name: element.contact?.name || element.contact?.maskedPhone,
    }));
  }
  return (
    <View style={styles.contactList}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={contacts}
          renderItem={contactItem}
          keyExtractor={(item) => item.index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contactList: {
    flex: 1,
    marginBottom: 20,
  },
});

export default ContactList;
