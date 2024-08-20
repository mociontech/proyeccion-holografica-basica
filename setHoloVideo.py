import sys
import pyautogui

condicion = int(sys.argv[1])

# clicks = int(y) - 17
# position_y = int(y) * 16 + 320

position_x = 2120

def move_cursor(x, y):
    pyautogui.moveTo(x, y,)
    pyautogui.doubleClick(x, y)
    print("se movio el cursor")

if condicion == 1:
    move_cursor(position_x,320)
elif condicion == 4:
    move_cursor(position_x,340)
elif condicion == 13:
    move_cursor(position_x,360)
elif condicion == 20:
    move_cursor(position_x,380)
else:
    print("sin cordenadas")



# def up_menu(number):
#     x = 510
#     y = 330
#     pyautogui.moveTo(x,y)
#     pyautogui.click(x,y, clicks=number) 

# def down_menu(number):
#     x = 510
#     y = 592
#     pyautogui.moveTo(x,y)
#     pyautogui.click(x,y,clicks=number)

# if clicks > 0 :
#     down_menu(clicks)
#     position_y = 17 * 16 + 320
#     move_cursor(position_x,position_y)
#     up_menu(clicks)
#     print ("mayor")

# if clicks <= 0:
#     print("menor")
#     move_cursor(position_x,position_y)




""" up_menu()
down_menu() """

""" move_cursor(position_x, position_y) """

""" print ("mouse {}. ".format(clicks)) """