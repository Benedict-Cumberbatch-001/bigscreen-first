
from scipy.interpolate import interp1d

# 输入数据
x = [1.3,1.7]  # X 值
y = [0.57,1.02]  # 对应的 Y 值

# 创建线性内插函数
interp_func = interp1d(x,y)

# 输入要内插的 X 值
interpolation_x =1.4

# 执行内插
interpolated_y = interp_func(interpolation_x)

print(f"插值结果：{interpolated_y}")
