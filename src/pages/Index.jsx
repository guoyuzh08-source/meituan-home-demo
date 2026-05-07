import { Search, MapPin, Bell, ShoppingBag, Coffee, Utensils, Pill, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <div style={{ minHeight: '16.24rem', background: '#FFE5F5', paddingBottom: '1.6rem', fontFamily: "'PingFang SC', -apple-system, sans-serif" }}>

      {/* 顶部导航栏 */}
      <header style={{ background: '#FFE5F5', height: '0.88rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MapPin style={{ width: '0.32rem', height: '0.32rem', marginRight: '0.08rem' }} />
          <span style={{ fontSize: '0.28rem', fontWeight: 500 }}>望京恒电大厦BC座</span>
        </div>
        <h1 style={{ fontSize: '0.36rem', fontWeight: 700 }}>北京美食指南</h1>
        <Bell style={{ width: '0.4rem', height: '0.4rem' }} />
      </header>

      {/* 搜索框 */}
      <div style={{ padding: '0.24rem 0.4rem', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="川成元麻辣香锅"
            style={{
              flex: 1,
              height: '0.72rem',
              padding: '0 0.24rem',
              border: '1px solid #ddd',
              borderRadius: '0.12rem',
              fontSize: '0.28rem',
              outline: 'none',
            }}
          />
          <button style={{
            marginLeft: '0.2rem',
            background: '#FF6B6B',
            color: '#fff',
            border: 'none',
            borderRadius: '0.12rem',
            height: '0.72rem',
            padding: '0 0.36rem',
            fontSize: '0.28rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.08rem',
            cursor: 'pointer',
          }}>
            <Search style={{ width: '0.28rem', height: '0.28rem' }} />
            搜索
          </button>
        </div>
      </div>

      {/* 功能分类 */}
      <div style={{ background: '#fff', padding: '0.4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {[
            { icon: <Utensils style={{ width: '0.48rem', height: '0.48rem', color: '#fff' }} />, bg: '#FF6B6B', label: '美食' },
            { icon: <Coffee style={{ width: '0.48rem', height: '0.48rem', color: '#fff' }} />, bg: '#FFB6C1', label: '甜点饮品' },
            { icon: <ShoppingBag style={{ width: '0.48rem', height: '0.48rem', color: '#555' }} />, bg: '#FFFFE0', label: '超市便利' },
            { icon: <Plus style={{ width: '0.48rem', height: '0.48rem', color: '#555' }} />, bg: '#98FB98', label: '蔬菜水果' },
            { icon: <Pill style={{ width: '0.48rem', height: '0.48rem', color: '#555' }} />, bg: '#FFDAB9', label: '美团买药' },
          ].map(({ icon, bg, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '0.96rem', height: '0.96rem',
                borderRadius: '50%',
                background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '0.12rem',
              }}>
                {icon}
              </div>
              <span style={{ fontSize: '0.22rem' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 神抢手推荐 */}
      <div style={{ background: '#FFF5F5', padding: '0.4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.32rem' }}>

          {/* 左卡 */}
          <div style={{ width: '48%', borderRadius: '0.16rem', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
            <div style={{ height: '2.4rem', background: '#f0f0f0', overflow: 'hidden' }}>
              <img
                src="https://nocode.meituan.com/photo/search?keyword=coffee,latte&width=400&height=300"
                alt="瑞幸咖啡"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '0.2rem' }}>
              <div style={{ fontSize: '0.24rem', fontWeight: 500 }}>瑞幸咖啡 | 玛斯卡彭生酪拿铁</div>
              <div style={{ fontSize: '0.2rem', color: '#999', marginTop: '0.08rem' }}>还余2张可用</div>
              <button style={{
                width: '100%', marginTop: '0.16rem', height: '0.6rem',
                border: '1px solid #FF6B6B', borderRadius: '0.3rem',
                background: 'transparent', color: '#FF6B6B',
                fontSize: '0.24rem', fontWeight: 600, cursor: 'pointer',
              }}>去使用</button>
            </div>
          </div>

          {/* 右卡 */}
          <div style={{ width: '48%', borderRadius: '0.16rem', overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
            <div style={{ height: '2.4rem', background: '#f0f0f0', overflow: 'hidden' }}>
              <img
                src="https://nocode.meituan.com/photo/search?keyword=chicken,rice&width=400&height=300"
                alt="老乡鸡"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '0.2rem' }}>
              <div style={{ fontSize: '0.24rem', fontWeight: 500 }}>老乡鸡 | 香菇鸡丁盖饭两人餐</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.1rem', marginTop: '0.08rem' }}>
                <span style={{ fontSize: '0.28rem', fontWeight: 700, color: '#FF6B6B' }}>¥39.2</span>
                <span style={{ fontSize: '0.2rem', color: '#bbb', textDecoration: 'line-through' }}>¥51.2</span>
              </div>
              <button style={{
                width: '100%', marginTop: '0.16rem', height: '0.6rem',
                border: 'none', borderRadius: '0.3rem',
                background: '#FF6B6B', color: '#fff',
                fontSize: '0.24rem', fontWeight: 600, cursor: 'pointer',
              }}>正在疯抢</button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', color: '#FF6B6B', fontSize: '0.26rem', fontWeight: 500 }}>
          5张券待使用
        </div>
      </div>

      {/* 附近商家 */}
      <div style={{ background: '#fff', padding: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.32rem' }}>
          <h2 style={{ fontSize: '0.34rem', fontWeight: 700 }}>附近商家</h2>
          <span style={{ fontSize: '0.22rem', color: '#FF6B6B', border: '1px solid #FFCC00', background: '#FFFBE6', borderRadius: '0.08rem', padding: '0.04rem 0.12rem' }}>特价外卖</span>
        </div>

        {/* 商家卡片 */}
        <div style={{ display: 'flex', gap: '0.24rem', padding: '0.24rem 0', borderBottom: '1px solid #f5f5f5' }}>
          <div style={{ width: '1.6rem', height: '1.6rem', borderRadius: '0.16rem', overflow: 'hidden', flexShrink: 0 }}>
            <img
              src="https://nocode.meituan.com/photo/search?keyword=restaurant,noodles&width=400&height=300"
              alt="西北莜面村"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.3rem', fontWeight: 700 }}>西北莜面村（望京华彩店）</div>
            <div style={{ fontSize: '0.22rem', color: '#999', marginTop: '0.1rem' }}>
              <span style={{ color: '#FF6B6B', fontWeight: 700 }}>4.5分</span>
              <span style={{ margin: '0 0.1rem' }}>·</span>月售6328
              <span style={{ margin: '0 0.1rem' }}>·</span>人均¥26
            </div>
            <div style={{ fontSize: '0.22rem', color: '#999', marginTop: '0.06rem' }}>
              起送¥20 · 配送约¥11.12 · 29分钟 2.5km
            </div>
            <div style={{ display: 'flex', gap: '0.1rem', marginTop: '0.12rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.2rem', color: '#16a34a', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.06rem', padding: '0.04rem 0.1rem' }}>望京咖啡口碑榜第1名</span>
              <span style={{ fontSize: '0.2rem', color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.06rem', padding: '0.04rem 0.1rem' }}>已测体温</span>
            </div>
          </div>
        </div>

        {/* 特价商品行 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.24rem 0', background: '#FFF5F5', marginTop: '0.16rem', borderRadius: '0.12rem', paddingLeft: '0.2rem', paddingRight: '0.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <div style={{ width: '1.2rem', height: '1.2rem', borderRadius: '0.12rem', overflow: 'hidden' }}>
              <img
                src="https://nocode.meituan.com/photo/search?keyword=rice,chicken&width=400&height=300"
                alt="特价商品"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.26rem', fontWeight: 500 }}>鸡纵豆花饭+大...</div>
              <div style={{ fontSize: '0.28rem', fontWeight: 700, color: '#FF6B6B' }}>¥27.1</div>
            </div>
          </div>
          <button style={{
            background: '#FF6B6B', color: '#fff', border: 'none',
            borderRadius: '0.32rem', padding: '0.16rem 0.32rem',
            fontSize: '0.26rem', fontWeight: 600, cursor: 'pointer',
          }}>立即抢购</button>
        </div>
      </div>

      {/* 底部导航栏 */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '7.5rem', background: '#fff', height: '1.0rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        boxShadow: '0 -1px 0 0 #F1F1F2', zIndex: 100,
      }}>
        {[
          { src: 'https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/0613373a0613373a0613373a0613373a.svg', label: '首页', active: true },
          { src: 'https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/08bddd2b08bddd2b08bddd2b08bddd2b.svg', label: '会员', active: false },
          { src: 'https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/0cf800e00cf800e00cf800e00cf800e0.svg', label: '订单', active: false },
          { src: 'https://s3plus.meituan.net/mcopilot-pub/nocode_design/assets/6ed379be6ed379be6ed379be6ed379be.svg', label: '我的', active: false },
        ].map(({ src, label, active }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <img src={src} alt={label} style={{ width: '0.48rem', height: '0.48rem' }} />
            <span style={{ fontSize: '0.2rem', marginTop: '0.06rem', fontWeight: active ? 600 : 400, color: active ? '#333' : '#999' }}>{label}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Index;
