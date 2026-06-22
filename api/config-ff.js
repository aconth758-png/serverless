// ================================================================
// VINZZ AI - FREE FIRE CONFIG (PURE JSON RESPONSE)
// ================================================================
// ENDPOINT: /api/config-ff
// METHOD: GET, OPTIONS
// RESPONSE: JSON MENTAH SESUAI KONFIGURASI
// ================================================================

const CONFIG = {
  code: 2,
  use_login_optional_download: false,
  use_background_download: false,
  use_background_download_lobby: false,
  country_code: "BR",
  client_ip: "187.77.225.94",
  gdpr_version: 0,
  billboard_cdn_url: "",
  billboard_msg: "",
  web_url: "",
  billboard_bg_url: "",
  max_store: "",
  max_web: "",
  max_video: "",
  patchnote_url: "",
  multi_region: "",
  appstore_url: "http://www.freefiremobile.com/",
  backup_appstore_url: "",
  garena_login: false,
  garena_hint: false,
  gop_url: "",
  gamevar: `var_name,comment,var_type,var_value
var_name,comment,"var_type float, int, bool",var_value
ANODisabledRegions,关闭MTP的地区,string,"IND,NA"
ANODisabledClientVariant,ANODisabledClientVariant,string,"ClientUsingVersion_MAX_HPE,ClientUsingVersion_FFI,ClientUsingVersion_MAX|IND,ClientUsingVersion_MAX|NA,ClientUsingVersion_NORMAL|NA"
EnableMtpLiteDataRegion,mtp轻特征开关,string,"BR,EUROPE,ID,ME,US,RU,SAC,SG,TH,TW,VN,PK,ZA,BD"
ANOEmulatorCheckDisbaledClientVariant,ANOEmulatorCheckDisbaledClientVariant,string,"ClientUsingVersion_FFI,ClientUsingVersion_MAX,ClientUsingVersion_NORMAL"
ForceTutorial_ChangeHudABTest,fps流程中打开hud选择界面的概率,float,-1
IsUseMedkitForceStand,IsUseMedkitForceStand,bool,false,,
AutoEnemyMarkSwitch,AutoEnemyMarkSwitch,int,2,,
ReleaseMemForMatchEndFor3I3A,ReleaseMemForMatchEndFor3I3A,bool,false,,
EnableFFOPortingHDAnimation,EnableFFOPortingHDAnimation,bool,false,,
EnableReportIOFailedLogs,EnableReportIOFailedLogs,bool,false,,
PGSRecallReadIPRegions_Mobile,PGSRecallReadIPRegions_Mobile,string,,,
PGSRecallReadIPRegions_HPE,PGSRecallReadIPRegions_HPE,string,,,
PGSRecallWriteIPRegions_Mobile,PGSRecallWriteIPRegions_Mobile,string,,,
PGSRecallWriteIPRegions_HPE,PGSRecallWriteIPRegions_HPE,string,,,
EnableFileInfoEncryptionIOS,EnableFileInfoEncryptionIOS,bool,TRUE,SG,
EnableFileInfoEncryptionAndroid,EnableFileInfoEncryptionAndroid,bool,TRUE,SG,`,
  device_whitelist_version: "1.6.0",
  whitelist_mask: 0,
  device_whitelist_sp_version: "1.0.0",
  whitelist_sp_mask: 0,
  ggp_url: "gin.freefiremobile.com",
  is_review_server: false,
};

// ================================================================
// SERVERLESS HANDLER
// ================================================================
module.exports = async (req, res) => {
  // HEADER CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');

  // HANDLE PREFLIGHT (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // RETURN PURE CONFIG JSON
  return res.status(200).json(CONFIG);
};
