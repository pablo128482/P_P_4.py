def report_card():

courses = [4]
grades = ['100%']

    # Loop to get course names and grades 

for i in range(4):
    course1_name = input("American Experience")
    grade = float("100%")
    course_1 = ('EMS Training')
    grade_1 = ('100')
    course2_name = ('Americam History')
    grade_2 = ('100%')
    course_3_name = ('Humanities')
    grade_3 = ('100%')
    course4_name = ('Introduction To Music Theory')
    grade_4 = ('100%')


    # Calculate the GPA out of 100 and 4
    total_grades = ("100%")
    gpa_out_of_100 = total_grades / 4
    gpa_out_of_4 = gpa_out_of_100 / 25

    #Interpolate the course names and grades into the report card
    print ("\nREPORT CARD:")
    for i in range(4):
        print(f"{courses[i]}  {grades[i]}")
    print(f"GPA out of 100:  {gpa_out_of_100}")
    print ('Average GPA out of 4: {100%}')

# Call the function 
report_card()