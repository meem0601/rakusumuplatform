import React, { useState, useEffect } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Trophy, 
  MonitorPlay, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Plus, 
  Send, 
  LogOut, 
  Menu, 
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  TrendingUp,
  Zap,
  Wifi,
  Laptop,
  LightbulbOff,
  ShieldCheck,
  Coffee,
  Handshake,
  CreditCard,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Smartphone,
  Globe,
  Award, 
  Home, 
  DollarSign, 
  MessageSquare,
  Layout,
  Smile,
  Heart, 
  CreditCard as CreditCardIcon,
  Wifi as WifiIcon,
  Lightbulb as LightbulbIcon,
  MessageCircle as MessageCircleIcon,
  Users as UsersIcon,
  BookOpen as BookOpenIcon,
  Target as TargetIcon,
  Brain as BrainIcon,
  Disc as DiscIcon,
  Mic as MicIcon,
  FileText as FileTextIcon,
  Info,
  CheckSquare,
  PlayCircle
} from 'lucide-react';

// --- Mock Data & Assets ---
const HEADER_BACKGROUND_IMG = "/header-v3.png";

const NEWS_ITEMS = [
  { id: 1, date: '2025.11.20', content: 'Rakusumu Platformが完成しました！' },
  { id: 2, date: '2025.11.18', content: '新商材【格安SIM】を利用可能に！キャンペーン実施中。' },
  { id: 3, date: '2025.11.15', content: 'システムメンテナンスのお知らせ（11/25 2:00-4:00）' },
];

// 稼ぐ（サブ）のデータ
const SUB_WORK_CONTENTS = [
  { id: 1, title: '光回線・Wi-Fi', reward: '20,000-30,000', rating: 3, icon: Wifi, color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-500' },
  { id: 2, title: 'HP制作(テンプレート)', reward: '20,000-30,000', rating: 3, icon: Laptop, color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-500' },
  { id: 3, title: 'HP制作(オリジナル)', reward: '20,000-30,000', rating: 4, icon: Laptop, color: 'from-pink-50 to-pink-100', iconColor: 'text-pink-500' },
  { id: 4, title: '電気/ガス', reward: '1,000-5,000', rating: 2, icon: LightbulbOff, color: 'from-yellow-50 to-yellow-100', iconColor: 'text-yellow-600' },
  { id: 5, title: '格安SIM', reward: '1,000-5,000', rating: 3, icon: Zap, color: 'from-green-50 to-green-100', iconColor: 'text-green-600' },
  { id: 6, title: '保険', reward: '5,000-10,000', rating: 3, icon: ShieldCheck, color: 'from-teal-50 to-teal-100', iconColor: 'text-teal-600' },
  { id: 7, title: 'ウォーターサーバー', reward: '5,000-10,000', rating: 3, icon: Coffee, color: 'from-red-50 to-red-100', iconColor: 'text-red-500' },
  { id: 8, title: '創業手続き', reward: '10,000-20,000', rating: 4, icon: Handshake, color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-500' },
  { id: 9, title: '退職給付金', reward: '5,000-10,000', rating: 3, icon: Briefcase, color: 'from-indigo-50 to-indigo-100', iconColor: 'text-indigo-500' },
  { id: 10, title: 'プログラミング教材', reward: '1,000-5,000', rating: 3, icon: Lightbulb, color: 'from-lime-50 to-lime-100', iconColor: 'text-lime-600' },
  { id: 11, title: '語学スクール', reward: '5,000-10,000', rating: 4, icon: GraduationCap, color: 'from-cyan-50 to-cyan-100', iconColor: 'text-cyan-600' },
  { id: 12, title: 'クレジットカード', reward: '1,000-5,000', rating: 3, icon: CreditCard, color: 'from-fuchsia-50 to-fuchsia-100', iconColor: 'text-fuchsia-600' },
];

// セミナーデータ
const SEMINAR_DATA = [
    { id: 1, title: '成功する営業スキルの極意 Vol.1', date: '11.21 19:00~', tag: '営業スキル', color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-600', icon: TrendingUp },
    { id: 2, title: 'プラットフォーム活用術', date: '11.22 19:00~', tag: '基礎講座', color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-600', icon: MonitorPlay },
    { id: 3, title: 'トップセールスが語る！成約率UPの秘訣', date: '11.23 14:00~', tag: '特別対談', color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-600', icon: Star },
    { id: 4, title: '商材知識Q&A', date: '11.24 20:00~', tag: '商品知識', color: 'from-teal-50 to-teal-100', iconColor: 'text-teal-600', icon: MessageCircle },
];

// Work (メイン) データ
const MAIN_WORK_CONTENTS = [
  { id: 1, title: '不動産エージェントマニュアル', reward: '詳細を見る', rating: 5, icon: Home, color: 'from-cyan-50 to-cyan-100', iconColor: 'text-cyan-600' }, 
  { id: 2, title: '転職希望者を紹介する', reward: '詳細を見る', rating: 5, icon: Briefcase, color: 'from-sky-50 to-sky-100', iconColor: 'text-sky-600' }, 
  { id: 3, title: '婚活希望者を紹介する', reward: '詳細を見る', rating: 4, icon: Heart, color: 'from-rose-50 to-rose-100', iconColor: 'text-rose-500' }, 
];

// Use データ
const USE_CONTENTS = [
  { id: 1, title: '光回線・Wi-Fi', reward: '報酬: 20,000-50,000', rating: 4, icon: WifiIcon, color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-600' },
  { id: 2, title: '電気・ガス', reward: '報酬: 1,000-5,000', rating: 3, icon: LightbulbIcon, color: 'from-yellow-50 to-yellow-100', iconColor: 'text-yellow-600' },
  { id: 3, title: '格安SIM', reward: '報酬: 1,000-5,000', rating: 4, icon: Smartphone, color: 'from-green-50 to-green-100', iconColor: 'text-green-600' },
  { id: 4, title: '保険', reward: '報酬: 1,000-5,000', rating: 3, icon: ShieldCheck, color: 'from-red-50 to-red-100', iconColor: 'text-red-600' },
  { id: 5, title: 'ウォーターサーバー', reward: '報酬: 1,000-5,000', rating: 4, icon: Coffee, color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-600' },
  { id: 6, title: '創業手続き', reward: '報酬: 1,000-5,000', rating: 5, icon: Handshake, color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-600' },
  { id: 7, title: '退職給付金サポート', reward: '報酬: 1,000-5,000', rating: 4, icon: Briefcase, color: 'from-teal-50 to-teal-100', iconColor: 'text-teal-600' },
  { id: 8, title: '小学生向けプログラミング教材', reward: '報酬: 1,000-5,000', rating: 4, icon: Laptop, color: 'from-lime-50 to-lime-100', iconColor: 'text-lime-600' },
  { id: 9, title: 'オンライン語学スクール', reward: '報酬: 1,000-5,000', rating: 3, icon: Globe, color: 'from-fuchsia-50 to-fuchsia-100', iconColor: 'text-fuchsia-600' },
  { id: 10, title: 'クレジットカード', reward: '報酬: 1,000-5,000', rating: 4, icon: CreditCardIcon, color: 'from-indigo-50 to-indigo-100', iconColor: 'text-indigo-600' },
];

// Connect データ
const CONNECT_CONTENTS = [
  { id: 1, title: '自由に会話を楽しむ', reward: '詳細を見る', rating: 4, icon: MessageCircleIcon, color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-600' },
  { id: 2, title: '募集掲示板', reward: '詳細を見る', rating: 3, icon: UsersIcon, color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-600' },
  { id: 3, title: 'イベント掲示板', reward: '詳細を見る', rating: 4, icon: Calendar, color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-600' },
  { id: 4, title: '懇親会', reward: '詳細を見る', rating: 3, icon: Coffee, color: 'from-pink-50 to-pink-100', iconColor: 'text-pink-600' },
];

// Learn データ
const LEARN_CONTENTS = [
  { id: 1, title: '紹介 (リファラル) を自然に生み出す導線設計', reward: '視聴する', rating: 5, icon: TrendingUp, color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-600' },
  // タイトル変更: 縦型フォローの形 -> 縦型フォローとは
  { id: 2, title: '縦型フォローとは', reward: '視聴する', rating: 4, icon: UsersIcon, color: 'from-purple-50 to-purple-100', iconColor: 'text-purple-600', type: 'lecture' }, 
  { id: 3, title: '成果が出る人の思考パターン (習慣・環境・PDCA)', reward: '視聴する', rating: 5, icon: TargetIcon, color: 'from-orange-50 to-orange-100', iconColor: 'text-orange-600' },
  { id: 4, title: 'AIで行動量を最大化する方法', reward: '視聴する', rating: 4, icon: BrainIcon, color: 'from-pink-50 to-pink-100', iconColor: 'text-pink-600' },
  { id: 5, title: 'メンタル維持・セルフコントロール術', reward: '視聴する', rating: 3, icon: DiscIcon, color: 'from-teal-50 to-teal-100', iconColor: 'text-teal-600' },
  { id: 6, title: 'ニーズ深掘りヒアリングの型', reward: '視聴する', rating: 4, icon: MicIcon, color: 'from-lime-50 to-lime-100', iconColor: 'text-lime-600' },
  { id: 7, title: '“伝わる情報整理”の3ポイント構成', reward: '視聴する', rating: 5, icon: FileTextIcon, color: 'from-indigo-50 to-indigo-100', iconColor: 'text-indigo-600' },
];

const RANKING_CONTENTS = [
  { id: 1, title: '〇〇光回線', reward: '5,000円', type: '月額報酬', trend: 'up' },
  { id: 2, title: '格安SIM', reward: '3,000円', type: '月額報酬', trend: 'up' },
  { id: 3, title: 'ウォーターサーバー', reward: '8,000円', type: '成約報酬', trend: 'stable' },
  { id: 4, title: '法人向け電力', reward: '10,000円', type: '成約報酬', trend: 'down' },
  { id: 5, title: '新築戸建て仲介', reward: '300,000円', type: '成約報酬', trend: 'up' },
];


// --- Components ---

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('meem');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (username === 'meem' && password === '1234') {
        onLogin(username);
      } else {
        setError('IDまたはパスワードが正しくありません。');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-70 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h1 className="text-3xl font-bold text-white tracking-wider z-10 drop-shadow-md">Rakusumu</h1>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 pl-1">ユーザーID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="meem" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 pl-1">パスワード</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="••••••••" required />
              </div>
            </div>
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center">
              {isLoading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'ログイン'}
            </button>
          </form>
          <div className="mt-8 text-center text-xs text-slate-400">Sample ID: meem / Pass: 1234</div>
        </div>
      </div>
    </div>
  );
};

const ContentCard = ({ title, subText, tag, icon: Icon, color, iconColor, rating, rank, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color}
        shadow-sm border border-white/50
        hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer
        group h-full flex flex-col justify-between
    `}>
      {/* 背景の大きなアイコン装飾 (常に表示) */}
      <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rotate-12">
        {Icon && <Icon size={120} className={`${iconColor}`} />}
      </div>
      
      <div className="relative z-10 p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
              {rank && <span className="text-lg font-extrabold text-slate-800">{rank}</span>}
              {!rank && Icon && <Icon size={24} className={iconColor} strokeWidth={2} />}
            </div>
            {tag && (
              <span className="text-[10px] font-bold bg-white/60 px-2 py-1 rounded-full text-slate-600">
                {tag}
              </span>
            )}
          </div>
          
          <h4 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{title}</h4>
          <p className="text-sm text-slate-600 font-medium">{subText}</p>
        </div>

        {rating !== undefined && (
          <div className="relative z-10 mt-4 flex items-center pt-4 border-t border-slate-900/5">
            <span className="text-xs text-slate-500 mr-2">おすすめ度:</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const NewsTicker = () => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm mb-8 relative overflow-hidden">
    <div className="flex items-center gap-2 mb-3">
      <div className="bg-red-100 text-red-600 p-1.5 rounded-md"><Bell size={16} /></div>
      <h3 className="font-bold text-slate-700 underline decoration-indigo-300 decoration-2 underline-offset-4">News</h3>
    </div>
    <div className="space-y-2.5 pl-1">
      {NEWS_ITEMS.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm group cursor-pointer">
          <span className="text-slate-400 font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">{item.date}</span>
          <span className="text-slate-700 group-hover:text-indigo-600 transition-colors border-b border-transparent group-hover:border-indigo-600/30">{item.content}</span>
        </div>
      ))}
    </div>
  </div>
);

const RankingTable = () => (
  <div className="mb-10">
    <div className="flex items-center gap-2 mb-4">
      <Trophy className="text-yellow-500 fill-yellow-500" size={20} />
      <h3 className="font-bold text-slate-800 text-lg">人気商材ランキング 👑</h3>
    </div>
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 w-20 text-center">順位</th>
              <th className="px-6 py-4">商材名</th>
              <th className="px-6 py-4">報酬タイプ</th>
              <th className="px-6 py-4 text-right">報酬額</th>
              <th className="px-6 py-4 text-center w-20">推移</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RANKING_CONTENTS.map((item, index) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                <td className="px-6 py-4 text-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto
                    ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 
                      index === 1 ? 'bg-slate-200 text-slate-700' : 
                      index === 2 ? 'bg-orange-100 text-orange-700' : 'bg-slate-50 text-slate-400'}
                  `}>
                    {index + 1}
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.title}</td>
                <td className="px-6 py-4 text-slate-500">
                    <span className="bg-slate-100 px-2 py-1 rounded text-xs">{item.type}</span>
                </td>
                <td className="px-6 py-4 text-right font-mono font-medium text-slate-700">{item.reward}</td>
                <td className="px-6 py-4 text-center">
                    {item.trend === 'up' && <TrendingUp size={16} className="text-red-500 mx-auto" />}
                    {item.trend === 'down' && <TrendingUp size={16} className="text-blue-500 mx-auto transform rotate-180" />}
                    {item.trend === 'stable' && <div className="w-2 h-0.5 bg-slate-300 mx-auto"></div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-50 px-6 py-3 text-right border-t border-slate-200">
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center justify-end gap-1 ml-auto">
              すべてのランキングを見る <ChevronRight size={12} />
          </button>
      </div>
    </div>
  </div>
);

const SeminarSection = () => (
  <div className="mb-10">
    <div className="flex items-center gap-2 mb-4">
       <div className="bg-indigo-100 text-indigo-600 p-1.5 rounded-lg"><MonitorPlay size={20} /></div>
      <h3 className="font-bold text-slate-800 text-lg">開催予定セミナー 📢</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SEMINAR_DATA.map((item) => (
            <ContentCard 
                key={item.id}
                title={item.title}
                subText={item.date}
                tag={item.tag}
                icon={item.icon}
                color={item.color}
                iconColor={item.iconColor}
            />
        ))}
    </div>
  </div>
);

// レクチャー詳細コンポーネント (動画対応)
const LectureDetail = ({ onBack }) => (
    <div className="animate-fadeIn pb-12">
        <button onClick={onBack} className="mb-6 flex items-center text-slate-500 hover:text-indigo-600 transition-colors group">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-2 group-hover:border-indigo-300 group-hover:bg-indigo-50">
                <ChevronLeft size={18} />
            </div>
            <span className="font-bold text-sm">一覧に戻る</span>
        </button>

        {/* 動画プレイヤー (iframeでGoogle Drive動画を埋め込み) */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-xl mb-10 relative aspect-video group">
            <iframe 
                src="https://drive.google.com/file/d/1-32189A8hW8NhP_sM_TGjy6nprxxHmjj/preview" 
                className="w-full h-full"
                allow="autoplay"
                title="縦型フォローとは"
            ></iframe>
        </div>
        
        {/* 動画下のタイトル追加 */}
        <div className="mb-8 text-center">
             <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-indigo-100 pb-4 inline-block px-8">
                縦型フォローとは
             </h2>
        </div>

        {/* コンテンツセクション */}
        <div className="space-y-6 max-w-4xl mx-auto">
            
            {/* Section 1: だいじなポイント */}
            <div className="bg-[#FFF9E5] rounded-xl p-6 border-l-4 border-[#EBCB8B]">
                <h3 className="text-[#8F6E30] font-bold text-lg mb-4 flex items-center gap-2">
                    <LightbulbIcon size={20} className="fill-[#8F6E30]" />
                    だいじなポイント
                </h3>
                <ul className="space-y-3 text-[#5F4B24] text-sm font-medium">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8F6E30] rounded-full mt-1.5 flex-shrink-0"></span>
                        信頼を積み上げると、お客様から自然に「紹介」が生まれる
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8F6E30] rounded-full mt-1.5 flex-shrink-0"></span>
                        フォローを続けることで「あなたなら安心」という関係ができる
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8F6E30] rounded-full mt-1.5 flex-shrink-0"></span>
                        毎日の小さな声かけや気遣いが、大きな成果につながる
                    </li>
                </ul>
            </div>

            {/* Section 2: なぜ大事なの？ */}
            <div className="bg-[#EBF5FF] rounded-xl p-6 border-l-4 border-[#5E81AC]">
                <h3 className="text-[#2E4C75] font-bold text-lg mb-4 flex items-center gap-2">
                    <Info size={20} className="text-[#2E4C75]" />
                    なぜ大事なの？
                </h3>
                <div className="text-[#3B5473] text-sm leading-relaxed space-y-4">
                    <p>
                        お客様は、お部屋探しの途中で不安や迷いを感じやすいものです。
                        そのとき、こまめに気にかけてくれる担当者は、
                        <span className="font-bold text-[#2E4C75]">「頼れる存在」</span>として記憶に残ります。
                    </p>
                    <p>
                        こうした信頼が少しずつ積み重なると、契約後も<br/>
                        「友達にも紹介したい」<br/>
                        「知り合いが困ってたら相談させたい」<br/>
                        という気持ちが自然と生まれていきます。
                    </p>
                    <p>
                        紹介は“お願いするもの”ではなく、<br/>
                        <span className="font-bold text-[#2E4C75] border-b-2 border-[#2E4C75]/20">日々の対応の積み重ねで勝手に生まれる結果</span>です。
                    </p>
                </div>
            </div>

            {/* Section 3: つまりどういうこと？ */}
            <div className="bg-[#E6F4F1] rounded-xl p-6 border-l-4 border-[#8FBCBB]">
                <h3 className="text-[#2D5A55] font-bold text-lg mb-4 flex items-center gap-2">
                    <Star size={20} className="fill-[#2D5A55] text-[#2D5A55]" />
                    つまりどういうこと？
                </h3>
                <div className="text-[#355C57] text-sm leading-relaxed">
                    <p className="mb-2">
                        追客の本質は<span className="font-bold text-[#20635B]">「売り込み」ではなく「信頼残高を積み上げる仕事」</span>。
                    </p>
                    <p>
                        その残高が高まったとき、<br/>
                        紹介・リピート・トスアップは「自然に発生する営業成果」になる。
                    </p>
                </div>
            </div>

            {/* Section 4: まずはこれだけやろう */}
            <div className="bg-[#FDF2E9] rounded-xl p-6 border-l-4 border-[#D08770]">
                <h3 className="text-[#A65235] font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckSquare size={20} className="text-[#A65235]" />
                    まずはこれだけやろう
                </h3>
                <ul className="space-y-3 text-[#8A4B38] text-sm font-medium">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#A65235] rounded-full mt-1.5 flex-shrink-0"></span>
                        すでに引越しが済んだ顧客に対してアフターフォロー連絡
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#A65235] rounded-full mt-1.5 flex-shrink-0"></span>
                        一度相談が来た顧客に対して、物件の再紹介や進捗確認連絡
                    </li>
                </ul>
            </div>

        </div>
    </div>
);


const DetailView = ({ title, colorClass, items, onBack, onItemClick }) => (
  <div className="animate-fadeIn">
    <button onClick={onBack} className="mb-6 flex items-center text-slate-500 hover:text-indigo-600 transition-colors group">
      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-2 group-hover:border-indigo-300 group-hover:bg-indigo-50">
        <ChevronLeft size={18} />
      </div>
      <span className="font-bold text-sm">トップに戻る</span>
    </button>

    <div className="flex items-center gap-3 mb-8">
      <div className={`w-1.5 h-8 ${colorClass} rounded-full`}></div>
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((content) => (
        <ContentCard 
          key={content.id}
          title={content.title}
          subText={content.reward}
          rating={content.rating}
          icon={content.icon}
          color={content.color}
          iconColor={content.iconColor}
          onClick={() => onItemClick && onItemClick(content)}
        />
      ))}
    </div>
  </div>
);

const MenuCard = ({ title, subtitle, icon: Icon, main, onClick }) => (
  <div 
    onClick={onClick}
    className={`
    relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 
    border border-blue-100 hover:border-blue-300 bg-white
    ${main ? 'col-span-1 sm:col-span-2' : ''}
    hover:shadow-lg hover:-translate-y-1 group
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/50 opacity-60 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="absolute -right-8 -bottom-8 text-blue-100 group-hover:text-blue-200 transition-colors transform rotate-12 scale-150">
        <Icon size={140} strokeWidth={1} />
    </div>

    <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px]">
      <div>
        <div className="flex items-baseline gap-2 mb-2">
            <h3 className={`text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight font-sans`}>{title}</h3>
            {main && <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">メイン</span>}
        </div>
        <p className="text-slate-500 text-sm font-bold pl-1">{subtitle}</p>
      </div>
      
      <div className="flex justify-end mt-4 items-end">
         <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-blue-50 group-hover:scale-110 transition-transform duration-300">
             <Icon size={40} className="text-blue-600" strokeWidth={1.5} />
         </div>
      </div>
    </div>
  </div>
);

const FeedbackBox = () => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
    <div className="relative z-10">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">運営への意見BOX <span className="text-2xl">📮</span></h2>
            <h3 className="text-lg font-bold text-slate-700 mb-2">ご意見をこちらからお送りください</h3>
            <p className="text-sm text-slate-500 leading-relaxed">もっとこういうサービスが欲しい！ここを改善してほしい！<br/>上記のようなご意見をたくさんお待ちしております ✨</p>
        </div>
        <div className="space-y-4">
            <textarea className="w-full border border-slate-300 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none min-h-[120px] resize-none bg-slate-50 focus:bg-white" placeholder="Your answer"></textarea>
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">送信する <Send size={14} /></button>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100">
            <p className="text-[10px] text-slate-400">Never submit sensitive personal information. <span className="underline cursor-pointer hover:text-slate-600 ml-1">Report abuse</span></p>
        </div>
    </div>
  </div>
);

const Header = ({ username, onLogout, showBack, onBack }) => (
  <header className="bg-transparent border-b border-slate-200 sticky top-0 z-50 overflow-hidden relative">
    <div className="absolute inset-0 pointer-events-none h-28">
        <div className="max-w-5xl mx-auto h-28 relative">
             <div 
                className="absolute inset-0 opacity-70" 
                style={{ 
                    backgroundImage: `url(${HEADER_BACKGROUND_IMG})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            ></div>
        </div>
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 h-28 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-2">
         {showBack && (
            <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-500 mr-1" title="戻る">
                <ChevronLeft size={24} />
            </button>
         )}
         <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">R</div>
         <span className="font-bold text-lg text-slate-800 tracking-tight">Rakusumu Platform</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
            <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center"><User size={14} /></div>
            <span className="text-xs font-bold text-slate-600">{username}</span>
        </div>
        <button onClick={onLogout} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all" title="ログアウト"><LogOut size={20} /></button>
      </div>
    </div>
  </header>
);

// 3. Main App
export default function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedContent, setSelectedContent] = useState(null); 

  useEffect(() => {
    const savedUser = localStorage.getItem('rakusumu_user');
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('rakusumu_user', username);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('rakusumu_user');
    setCurrentView('home');
    setSelectedContent(null);
  };

  const goHome = () => {
      setCurrentView('home');
      setSelectedContent(null);
  };

  // 詳細画面への遷移処理
  const handleLearnItemClick = (item) => {
      // ID=2 (縦型フォローの形) の場合のみ特別な詳細画面へ
      if (item.id === 2) {
          setSelectedContent(item);
      }
  };

  const handleBackToLearnList = () => {
      setSelectedContent(null);
  };

  if (!user) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      <Header 
        username={user} 
        onLogout={handleLogout} 
        showBack={currentView !== 'home' || selectedContent !== null} 
        onBack={selectedContent ? handleBackToLearnList : goHome}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-20">
        {/* 詳細画面 (レクチャー) */}
        {selectedContent && currentView === 'learn' ? (
            <LectureDetail onBack={handleBackToLearnList} />
        ) : (
            <>
                {currentView === 'home' && (
                    <div className="animate-fadeIn space-y-12">
                        <NewsTicker />
                        <RankingTable />
                        <SeminarSection />
                        <div className="my-8 border-b border-slate-200/60"></div>
                        
                        {/* WorkArea (Menu) */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                                    <h3 className="font-bold text-slate-800 text-lg">全員ここで作業。</h3>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"><Menu size={18} /></button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                <MenuCard 
                                    title="Work" 
                                    subtitle="稼ぐ [メイン]" 
                                    icon={Briefcase} 
                                    main={true} 
                                    onClick={() => setCurrentView('work_main')} 
                                />
                                <MenuCard 
                                    title="Work" 
                                    subtitle="稼ぐ [サブ]" 
                                    icon={Zap} 
                                    onClick={() => setCurrentView('work_sub')} 
                                />
                                <MenuCard 
                                    title="Use" 
                                    subtitle="オトクに利用" 
                                    icon={Star} 
                                    onClick={() => setCurrentView('use')} 
                                />
                                <MenuCard 
                                    title="Connect" 
                                    subtitle="繋がる" 
                                    icon={Users} 
                                    onClick={() => setCurrentView('connect')} 
                                />
                                <MenuCard 
                                    title="Learn" 
                                    subtitle="学ぶ" 
                                    icon={Lightbulb} 
                                    onClick={() => setCurrentView('learn')} 
                                />
                            </div>
                        </div>

                        <FeedbackBox />
                    </div>
                )}

                {/* 一覧画面群 */}
                {currentView === 'work_main' && (
                    <DetailView title="稼ぐ (メイン)" colorClass="bg-indigo-600" items={MAIN_WORK_CONTENTS} onBack={goHome} />
                )}
                {currentView === 'work_sub' && (
                    <DetailView title="稼ぐ (サブ)" colorClass="bg-purple-600" items={SUB_WORK_CONTENTS} onBack={goHome} />
                )}
                {currentView === 'use' && (
                    <DetailView title="オトクに利用" colorClass="bg-yellow-500" items={USE_CONTENTS} onBack={goHome} />
                )}
                {currentView === 'connect' && (
                    <DetailView title="繋がる" colorClass="bg-rose-500" items={CONNECT_CONTENTS} onBack={goHome} />
                )}
                {currentView === 'learn' && !selectedContent && (
                    <DetailView 
                        title="学ぶ" 
                        colorClass="bg-emerald-500" 
                        items={LEARN_CONTENTS} 
                        onBack={goHome} 
                        onItemClick={handleLearnItemClick} 
                    />
                )}
            </>
        )}

      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-xs">&copy; 2025 Rakusumu Platform. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}
