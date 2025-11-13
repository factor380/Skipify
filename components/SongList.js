import React from 'react';
import { FlatList } from 'react-native';
import SongItem from './SongItem';

export default function SongList({ songs }) {
  return (
    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SongItem title={item.title} artist={item.artist} />}
    />
  );
}