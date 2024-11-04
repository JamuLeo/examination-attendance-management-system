import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo router';
import { FontAwesome5, MaterialIcons, Ionicons, Entypo  } from '@expo/vector-icons'; // Icons from Expo

export default function MenuOptionsScreen () {
  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
            {/* School Icon at the Top Center */}
                <Ionicons name="school" size={80} color="black" style={styles.schoolIcon} />

            {/* Account Icon at the Top Right */}
            <TouchableOpacity style={styles.accountIcon}>
                <MaterialIcons name="account-circle" size={30} color="black" />
            </TouchableOpacity>

            {/* Check In Button */}
            <Link href="/ScanScreen" style={styles.button}>
                <Entypo name="back-in-time" size={24} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Check In</Text>
            </Link>

            {/* Check Out Button */}
            <Link href="/ScanScreen" style={styles.button}>
                <Entypo name="log-out" size={24} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Check Out</Text>
            </Link>

            {/* Attendance Report Button */}
            <Link href="/AttendanceReportPage" style={styles.button}>
                <FontAwesome5 name="clipboard-list" size={24} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Attendance Report</Text>
            </Link>

            {/* Logout Button */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => {
                    // Logout functionality to be added soon
                }}
            >
                    <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1
    },
    
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      },
      schoolIcon: {
        marginTop: 40,
        marginBottom: 20,
      },
      accountIcon: {
        position: 'absolute',
        top: 40,
        right: 20,
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '80%',
        marginVertical: 10,
      },
      icon: {
        marginRight: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      logoutButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 30,
      },
      logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

});



