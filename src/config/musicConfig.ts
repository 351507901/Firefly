import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "爱如潮水",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 爱如潮水.mp3",
				cover: "/assets/music/cover/album-n-19000.jpg",
			},
			{
				name: "不要对他说",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 不要对他说.mp3",
				cover: "/assets/music/cover/album-a-1167470663.jpg",
			},
			{
				name: "过火",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 过火.mp3",
				cover: "/assets/music/cover/album-a-1167470663.jpg",
			},
			{
				name: "我不难过",
				artist: "孙燕姿",
				category: "中文",
				url: "/assets/music/孙燕姿 - 我不难过.mp3",
				cover: "/assets/music/cover/album-a-255920420.jpg",
			},
			{
				name: "我怀念的",
				artist: "孙燕姿",
				category: "中文",
				url: "/assets/music/孙燕姿 - 我怀念的.mp3",
				cover: "/assets/music/cover/album-a-905226289.jpg",
			},
			{
				name: "太想爱你",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 太想爱你.mp3",
				cover: "/assets/music/cover/album-a-1167467912.jpg",
			},
			{
				name: "用情",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 用情.mp3",
				cover: "/assets/music/cover/album-a-1167466269.jpg",
			},
			{
				name: "有一点动心",
				artist: "张信哲 & 刘嘉玲",
				category: "中文",
				url: "/assets/music/张信哲 & 刘嘉玲 - 有一点动心.mp3",
				cover: "/assets/music/cover/album-n-18996.jpg",
			},
			{
				name: "从开始到现在",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 从开始到现在.mp3",
				cover: "/assets/music/cover/album-a-1434646161.jpg",
			},
			{
				name: "焚情",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 焚情.mp3",
				cover: "/assets/music/cover/album-a-1152876504.jpg",
			},
			{
				name: "宽容",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 宽容.mp3",
				cover: "/assets/music/cover/album-a-1167470663.jpg",
			},
			{
				name: "难以抗拒你容颜",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 难以抗拒你容颜.mp3",
				cover: "/assets/music/cover/album-n-19004.jpg",
			},
			{
				name: "我是真的爱你",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 我是真的爱你.mp3",
				cover: "/assets/music/cover/album-n-19000.jpg",
			},
			{
				name: "爱就一个字",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 爱就一个字.mp3",
				cover: "/assets/music/cover/album-a-1167459207.jpg",
			},
			{
				name: "别怕我伤心",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - 别怕我伤心.mp3",
				cover: "/assets/music/cover/album-n-18996.jpg",
			},
			{
				name: "I Believe",
				artist: "张信哲",
				category: "中文",
				url: "/assets/music/张信哲 - I Believe.mp3",
				cover: "/assets/music/cover/album-n-34588239.jpg",
			},
			{
				name: "そのままの君でいい",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - そのままの君でいい.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "もっと、しゃべりたい",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - もっと、しゃべりたい.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "やさしい時間",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - やさしい時間.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "黄昏の街",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 黄昏の街.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "決意",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 決意.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "月がきれい",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 月がきれい.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "困惑",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 困惑.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "焦燥I",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 焦燥I.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "水面に揺れる月",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 水面に揺れる月.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "川越の春、新たな芽吹き",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 川越の春、新たな芽吹き.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "付き合うって、何？",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 付き合うって、何？.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "部活動",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 部活動.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "陽暮れて家路近くありせば",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 陽暮れて家路近くありせば.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "涙",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 涙.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "恋人たち",
				artist: "伊賀拓郎",
				category: "纯音乐",
				url: "/assets/music/伊賀拓郎 - 恋人たち.mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "夏祭り(TVアニメ「月がきれい」EDIT ver.)",
				artist: "東山奈央",
				category: "日语",
				url: "/assets/music/東山奈央 - 夏祭り(TVアニメ「月がきれい」EDIT ver.).mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
			{
				name: "月がきれい",
				artist: "東山奈央",
				category: "日语",
				url: "/assets/music/東山奈央 - 月がきれい.mp3",
				cover: "/assets/music/cover/album-vtcl-35257.jpg",
			},
			{
				name: "初恋",
				artist: "東山奈央",
				category: "日语",
				url: "/assets/music/東山奈央 - 初恋.mp3",
				cover: "/assets/music/cover/album-vtcl-35257.jpg",
			},
			{
				name: "未来へ(TVアニメ「月がきれい」EDIT ver.)",
				artist: "東山奈央",
				category: "日语",
				url: "/assets/music/東山奈央 - 未来へ(TVアニメ「月がきれい」EDIT ver.).mp3",
				cover: "/assets/music/cover/album-vtcl-60453.jpg",
			},
		],
	},
};
