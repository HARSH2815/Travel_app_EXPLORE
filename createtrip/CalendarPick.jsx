import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const CalendarPick = ({ route, navigation }) => {
  const { prevData, selectedOption } = route.params;
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      // Handle range selection or single-day selection
      if (selectedStartDate && date < selectedStartDate) {
        setSelectedStartDate(date);
        setSelectedEndDate(null);
      } else {
        setSelectedEndDate(date);
      }
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null); // Reset end date on selecting new start date
    }
  };

  const calculateNumberOfDays = () => {
    if (selectedStartDate && selectedEndDate) {
      const start = new Date(selectedStartDate);
      const end = new Date(selectedEndDate);
      const diffTime = Math.abs(end - start);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    } else if (selectedStartDate) {
      // Single day selection
      return 1;
    }
    return 0;
  };

  const handleContinue = () => {
    navigation.navigate('ReviewPage', {
      prevData: {
        ...prevData,
        selectedOption,
        numberOfDays: calculateNumberOfDays(),
        startDate: selectedStartDate ? selectedStartDate.toLocaleDateString() : 'N/A',
        endDate: selectedEndDate ? selectedEndDate.toLocaleDateString() : selectedStartDate.toLocaleDateString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        
        onDateChange={onDateChange}
        selectedDayColor="#244055"
        selectedDayTextColor="white"
        todayBackgroundColor="#f2e6ff"
        minDate={new Date()} 
      />

      <View style={styles.footer}>
        <Text>{"Start Date: " + (selectedStartDate ? selectedStartDate.toLocaleDateString() : 'DD/MM/YYYY')}</Text>
        <Text>{"End Date: " + (selectedEndDate ? selectedEndDate.toLocaleDateString() : 'DD/MM/YYYY')}</Text>
        <Text style={styles.daysText}>
          {selectedStartDate ? `Number of Days: ${calculateNumberOfDays()}` : 'Number of Days: 0'}
        </Text>
        <TouchableOpacity
          style={[styles.continueButton, { backgroundColor: (!selectedStartDate) ? '#ccc' : '#244055' }]}
          disabled={!selectedStartDate}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarPick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'outfit-bold',
  },
  daysText: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginTop: 10,
  },
});
