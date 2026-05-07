import { Search, MapPin, Bell, ShoppingBag, Coffee, Utensils, Pill, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFE5F5] pb-20">
      {/* 顶部导航栏 */}
      <header className="bg-[#FFE5F5] h-24 flex items-center justify-between px-5">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          <span className="text-lg font-medium">望京恒电大厦BC座</span>
        </div>
        <h1 className="text-2xl font-bold">北京美食指南</h1>
        <Bell className="h-6 w-6" />
      </header>

      {/* 搜索框 */}
      <div className="px-5 py-4 bg-white">
        <div className="flex items-center">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="川成元麻辣香锅" 
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-base"
            />
          </div>
          <Button className="ml-3 bg-[#FF6B6B] text-white px-6 h-12 rounded-lg">
            <Search className="h-5 w-5 mr-1" />
            搜索
          </Button>
        </div>
      </div>

      {/* 功能分类 */}
      <div className="bg-white py-5">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center mb-2">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <span className="text-sm">美食</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FFB6C1] flex items-center justify-center mb-2">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <span className="text-sm">甜点饮品</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FFFFE0] flex items-center justify-center mb-2">
              <ShoppingBag className="h-8 w-8 text-gray-700" />
            </div>
            <span className="text-sm">超市便利</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#98FB98] flex items-center justify-center mb-2">
              <Plus className="h-8 w-8 text-gray-700" />
            </div>
            <span className="text-sm">蔬菜水果</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FFDAB9] flex items-center justify-center mb-2">
              <Pill className="h-8 w-8 text-gray-700" />
            </div>
            <span className="text-sm">美团买药</span>
          </div>
        </div>
      </div>

      {/* 推荐模块 */}
      <div className="bg-[#FFF5F5] p-5">
        <div className="flex justify-between mb-4">
          <Card className="w-[48%] overflow-hidden">
            <div className="h-32 bg-gray-200">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=coffee,latte&width=400&height=300" 
                alt="瑞幸咖啡" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <div className="font-medium text-sm">瑞幸咖啡 | 玛斯卡彭生酪拿铁</div>
              <div className="text-xs text-gray-500 mt-1">还余2张可用</div>
              <Button variant="outline" className="w-full mt-2 text-[#FF6B6B] border-[#FF6B6B]">
                去使用
              </Button>
            </div>
          </Card>
          
          <Card className="w-[48%] overflow-hidden">
            <div className="h-32 bg-gray-200">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=chicken,rice&width=400&height=300" 
                alt="老乡鸡" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <div className="font-medium text-sm">老乡鸡 | 香菇鸡丁盖饭两人餐</div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center">
                  <span className="text-[#FF6B6B] font-bold">¥39.2</span>
                  <span className="text-xs text-gray-500 line-through ml-2">¥51.2</span>
                </div>
              </div>
              <Button className="w-full mt-2 bg-[#FF6B6B] text-white">
                正在疯抢
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="text-center text-[#FF6B6B] font-medium">
          5张券待使用
        </div>
      </div>

      {/* 附近商家 */}
      <div className="bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">附近商家</h2>
          <div className="flex space-x-2">
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">特价外卖</Badge>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* 商家卡片 */}
          <Card className="p-4">
            <div className="flex">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <img 
                  src="https://nocode.meituan.com/photo/search?keyword=restaurant,noodles&width=400&height=300" 
                  alt="西北莜面村" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-bold text-lg">西北莜面村（望京华彩店）</div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span className="text-[#FF6B6B] font-bold">4.5分</span>
                  <span className="mx-2">·</span>
                  <span>月售6328</span>
                  <span className="mx-2">·</span>
                  <span>人均¥26</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>起送¥20</span>
                  <span className="mx-2">·</span>
                  <span>配送约¥11.12</span>
                  <span className="mx-2">·</span>
                  <span>29分钟 2.5km</span>
                </div>
                <div className="flex items-center mt-2">
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 text-xs">
                    望京咖啡口碑榜第1名
                  </Badge>
                  <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-600 border-blue-200 text-xs">
                    已测体温
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
          
          {/* 特价商品 */}
          <Card className="p-4 bg-[#FFF5F5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src="https://nocode.meituan.com/photo/search?keyword=rice,chicken&width=400&height=300" 
                    alt="特价商品" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <div className="font-medium">鸡纵豆花饭+大...</div>
                  <div className="text-[#FF6B6B] font-bold">¥27.1</div>
                </div>
              </div>
              <Button className="bg-[#FF6B6B] text-white">立即抢购</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* 底部导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white h-20 flex items-center justify-around shadow-[0_-1px_0_0_#F1F1F2]">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6">
            <img src="https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/0613373a0613373a0613373a0613373a.svg" alt="首页" className="w-full h-full" />
          </div>
          <span className="text-sm font-medium mt-1">首页</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6">
            <img src="https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/08bddd2b08bddd2b08bddd2b08bddd2b.svg" alt="会员" className="w-full h-full" />
          </div>
          <span className="text-sm text-gray-500 mt-1">会员</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6">
            <img src="https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/0cf800e00cf800e00cf800e00cf800e0.svg" alt="订单" className="w-full h-full" />
          </div>
          <span className="text-sm text-gray-500 mt-1">订单</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6">
            <img src="https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/6ed379be6ed379be6ed379be6ed379be.svg" alt="我的" className="w-full h-full" />
          </div>
          <span className="text-sm text-gray-500 mt-1">我的</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
