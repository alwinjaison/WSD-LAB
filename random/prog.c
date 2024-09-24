#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 60
#define MAX_CANDIDATES 5

// Structure for Candidate Information
typedef struct {
    char name[50];
    int rollNo;
    int votes;
    char gender;
} Candidate;

Candidate maleCandidates[MAX_CANDIDATES];
Candidate femaleCandidates[MAX_CANDIDATES];
int maleCount = 0, femaleCount = 0;
int hasVoted[MAX_STUDENTS] = {0}; // Tracks if a student has voted or is a candidate

// Function Declarations
void candidateMenu();
void voterMenu();
void voteMale();
void voteFemale();
void displayResults();
void viewCandidates(); // New function to view all applied candidates

// Main Function
int main() {
    int choice;
    
    while (1) {
        printf("\n--- Class Representative Election System ---\n");
        printf("1. Stand as a Candidate\n");
        printf("2. Vote\n");
        printf("3. View Applied Candidates\n");  // New option added
        printf("4. Display Results\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        
        switch (choice) {
            case 1:
                candidateMenu();
                break;
            case 2:
                voterMenu();
                break;
            case 3:
                viewCandidates();  // View candidates functionality
                break;
            case 4:
                displayResults();
                break;
            case 5:
                return 0;
            default:
                printf("Invalid choice! Try again.\n");
        }
    }
    return 0;
}

// Candidate Menu: Register as a candidate
void candidateMenu() {
    int rollNo;
    char name[50], gender;

    printf("Enter your roll number (1-60): ");
    scanf("%d", &rollNo);

    if (hasVoted[rollNo - 1] == 1) {
        printf("You cannot stand as a candidate and vote!\n");
        return;
    }

    printf("Enter your name: ");
    scanf("%s", name);
    printf("Enter your gender (M/F): ");
    scanf(" %c", &gender);

    // Register male candidate
    if (gender == 'M' || gender == 'm') {
        if (maleCount < MAX_CANDIDATES) {
            maleCandidates[maleCount].rollNo = rollNo;
            strcpy(maleCandidates[maleCount].name, name);
            maleCandidates[maleCount].gender = 'M';
            maleCandidates[maleCount].votes = 0;
            maleCount++;
            printf("Successfully registered as a male candidate!\n");
        } else {
            printf("Maximum male candidates reached!\n");
        }
    }
    // Register female candidate
    else if (gender == 'F' || gender == 'f') {
        if (femaleCount < MAX_CANDIDATES) {
            femaleCandidates[femaleCount].rollNo = rollNo;
            strcpy(femaleCandidates[femaleCount].name, name);
            femaleCandidates[femaleCount].gender = 'F';
            femaleCandidates[femaleCount].votes = 0;
            femaleCount++;
            printf("Successfully registered as a female candidate!\n");
        } else {
            printf("Maximum female candidates reached!\n");
        }
    } else {
        printf("Invalid gender!\n");
    }

    hasVoted[rollNo - 1] = 1; // Candidate cannot vote
}

// Voter Menu: Voting process for male and female representatives
void voterMenu() {
    int rollNo;

    printf("Enter your roll number (1-60): ");
    scanf("%d", &rollNo);

    if (hasVoted[rollNo - 1] == 1) {
        printf("You have already voted or are a candidate!\n");
        return;
    }

    // Vote for male representative
    if (maleCount == 0) {
        printf("No male candidates available for election.\n");
    } else if (maleCount == 1) {
        printf("Male Representative %s (Roll No: %d) is automatically elected!\n",
               maleCandidates[0].name, maleCandidates[0].rollNo);
        maleCandidates[0].votes++; // Auto-elect
    } else {
        voteMale();
    }

    // Vote for female representative
    if (femaleCount == 0) {
        printf("No female candidates available for election.\n");
    } else if (femaleCount == 1) {
        printf("Female Representative %s (Roll No: %d) is automatically elected!\n",
               femaleCandidates[0].name, femaleCandidates[0].rollNo);
        femaleCandidates[0].votes++; // Auto-elect
    } else {
        voteFemale();
    }

    hasVoted[rollNo - 1] = 1; // Mark student as having voted
}

// Voting function for male candidates
void voteMale() {
    int choice;

    printf("\n--- Male Candidates ---\n");
    for (int i = 0; i < maleCount; i++) {
        printf("%d. Name: %s, Roll No: %d\n", i + 1, maleCandidates[i].name, maleCandidates[i].rollNo);
    }

    printf("Choose your preferred male candidate: ");
    scanf("%d", &choice);

    if (choice >= 1 && choice <= maleCount) {
        maleCandidates[choice - 1].votes++;
        printf("You voted for %s!\n", maleCandidates[choice - 1].name);
    } else {
        printf("Invalid choice!\n");
    }
}

// Voting function for female candidates
void voteFemale() {
    int choice;

    printf("\n--- Female Candidates ---\n");
    for (int i = 0; i < femaleCount; i++) {
        printf("%d. Name: %s, Roll No: %d\n", i + 1, femaleCandidates[i].name, femaleCandidates[i].rollNo);
    }

    printf("Choose your preferred female candidate: ");
    scanf("%d", &choice);

    if (choice >= 1 && choice <= femaleCount) {
        femaleCandidates[choice - 1].votes++;
        printf("You voted for %s!\n", femaleCandidates[choice - 1].name);
    } else {
        printf("Invalid choice!\n");
    }
}

// Display Results
void displayResults() {
    printf("\n--- Election Results ---\n");

    // Male results
    if (maleCount == 0) {
        printf("No male candidates stood for election.\n");
    } else {
        int maxVotes = 0, winner = -1;
        for (int i = 0; i < maleCount; i++) {
            if (maleCandidates[i].votes > maxVotes) {
                maxVotes = maleCandidates[i].votes;
                winner = i;
            }
        }
        printf("Male Representative: %s (Roll No: %d) with %d votes!\n",
               maleCandidates[winner].name, maleCandidates[winner].rollNo, maxVotes);
    }

    // Female results
    if (femaleCount == 0) {
        printf("No female candidates stood for election.\n");
    } else {
        int maxVotes = 0, winner = -1;
        for (int i = 0; i < femaleCount; i++) {
            if (femaleCandidates[i].votes > maxVotes) {
                maxVotes = femaleCandidates[i].votes;
                winner = i;
            }
        }
        printf("Female Representative: %s (Roll No: %d) with %d votes!\n",
               femaleCandidates[winner].name, femaleCandidates[winner].rollNo, maxVotes);
    }
}

// New function to view candidates who have applied
void viewCandidates() {
    printf("\n--- Applied Candidates ---\n");

    // Male candidates
    if (maleCount == 0) {
        printf("No male candidates have applied yet.\n");
    } else {
        printf("\n--- Male Candidates ---\n");
        for (int i = 0; i < maleCount; i++) {
            printf("%d. Name: %s, Roll No: %d\n", i + 1, maleCandidates[i].name, maleCandidates[i].rollNo);
        }
    }

    // Female candidates
    if (femaleCount == 0) {
        printf("No female candidates have applied yet.\n");
    } else {
        printf("\n--- Female Candidates ---\n");
        for (int i = 0; i < femaleCount; i++) {
            printf("%d. Name: %s, Roll No: %d\n", i + 1, femaleCandidates[i].name, femaleCandidates[i].rollNo);
        }
    }
}
