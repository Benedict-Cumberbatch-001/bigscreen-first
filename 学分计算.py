import math
grade=0
sumga=0
summag=0
while(1):
    grade=input('请输入成绩及该科学分')
    if grade=='结束':
         break
    mag=int(grade[-1])#该科的学分
    ga=int(grade[0:-1])#该科的成绩
    sumga+=mag*ga#学分乘以成绩总合
    summag+=mag#学分总和
    print(mag,ga)
# a=input('你是学硕还是专硕 学硕/专硕')
# if a=='学硕':
#     b=math.cos((1-17/21)*math.pi/2)
# elif a=='专硕':
#     b=
print('你的加权成绩是：',math.cos((1-17/21)*math.pi/2)*sumga/summag)