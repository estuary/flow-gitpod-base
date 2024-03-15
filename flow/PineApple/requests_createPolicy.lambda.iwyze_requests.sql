
-- Example select statement for transform iwyze_requests of source collection PineApple/Mongo_pipeline/pineapple/iwyze_requests.
select
    -- Field __v at /__v
    $__v,
    -- Key _id at /_id
    $_id,
    -- Field _meta at /_meta
    $_meta,
    -- Field _meta/flow_truncated at /_meta/flow_truncated; Flow truncation indicator; Indicates whether any of the materialized values for this row have been truncated to make them fit inside the limitations of the destination system.
    $_meta$flow_truncated,
    -- Field _meta/op at /_meta/op; Change Operation; Change operation type: 'c' Create/Insert 'u' Update 'd' Delete.
    $_meta$op,
    -- Field _meta/uuid at /_meta/uuid
    $_meta$uuid,
    -- Field cellphoneNumber at /cellphoneNumber
    $cellphoneNumber,
    -- Field claimFraudRejection at /claimFraudRejection
    $claimFraudRejection,
    -- Field claimsDates at /claimsDates
    $claimsDates,
    -- Field convictions at /convictions
    $convictions,
    -- Field createdAt at /createdAt
    $createdAt,
    -- Field dateOfBirth at /dateOfBirth
    $dateOfBirth,
    -- Field dateOfBirthDate at /dateOfBirthDate
    $dateOfBirthDate,
    -- Field debtReview at /debtReview
    $debtReview,
    -- Field emailAddress at /emailAddress
    $emailAddress,
    -- Field firstName at /firstName
    $firstName,
    -- Field flow_document at 
    $flow_document,
    -- Field flow_published_at at /_meta/uuid; Flow Publication Time; Flow publication date-time of this document
    $flow_published_at,
    -- Field gender at /gender
    $gender,
    -- Field homeAddress at /homeAddress
    $homeAddress,
    -- Field homeAddress/afrigisAddress at /homeAddress/afrigisAddress
    $homeAddress$afrigisAddress,
    -- Field homeAddress/afrigisAddress/afrigisCode at /homeAddress/afrigisAddress/afrigisCode
    $homeAddress$afrigisAddress$afrigisCode,
    -- Field homeAddress/afrigisAddress/boxCode at /homeAddress/afrigisAddress/boxCode
    $homeAddress$afrigisAddress$boxCode,
    -- Field homeAddress/afrigisAddress/province at /homeAddress/afrigisAddress/province
    $homeAddress$afrigisAddress$province,
    -- Field homeAddress/afrigisAddress/streetCode at /homeAddress/afrigisAddress/streetCode
    $homeAddress$afrigisAddress$streetCode,
    -- Field homeAddress/afrigisAddress/suburb at /homeAddress/afrigisAddress/suburb
    $homeAddress$afrigisAddress$suburb,
    -- Field homeAddress/afrigisAddress/town at /homeAddress/afrigisAddress/town
    $homeAddress$afrigisAddress$town,
    -- Field homeAddress/googleAddress at /homeAddress/googleAddress
    $homeAddress$googleAddress,
    -- Field homeAddress/googleAddress/coords at /homeAddress/googleAddress/coords
    $homeAddress$googleAddress$coords,
    -- Field homeAddress/googleAddress/coords/lat at /homeAddress/googleAddress/coords/lat
    $homeAddress$googleAddress$coords$lat,
    -- Field homeAddress/googleAddress/coords/lng at /homeAddress/googleAddress/coords/lng
    $homeAddress$googleAddress$coords$lng,
    -- Field homeAddress/googleAddress/number at /homeAddress/googleAddress/number
    $homeAddress$googleAddress$number,
    -- Field homeAddress/googleAddress/street at /homeAddress/googleAddress/street
    $homeAddress$googleAddress$street,
    -- Field homeAddress/googleAddress/suburb at /homeAddress/googleAddress/suburb
    $homeAddress$googleAddress$suburb,
    -- Field insolvent at /insolvent
    $insolvent,
    -- Field insuranceDeclined at /insuranceDeclined
    $insuranceDeclined,
    -- Field iwyzeApiRequest_id at /iwyzeApiRequest_id
    $iwyzeApiRequest_id,
    -- Field judgements at /judgements
    $judgements,
    -- Field lastName at /lastName
    $lastName,
    -- Field licenseDate at /licenseDate
    $licenseDate,
    -- Field licenseEndorsements at /licenseEndorsements
    $licenseEndorsements,
    -- Field licenseExpiryDate at /licenseExpiryDate
    $licenseExpiryDate,
    -- Field licenseRestrictions at /licenseRestrictions
    $licenseRestrictions,
    -- Field licenseTypeCode at /licenseTypeCode
    $licenseTypeCode,
    -- Field maritalStatusCode at /maritalStatusCode
    $maritalStatusCode,
    -- Field numberOfJudgements at /numberOfJudgements
    $numberOfJudgements,
    -- Field personType at /personType
    $personType,
    -- Field previousLoss at /previousLoss
    $previousLoss,
    -- Field prvInsLosses at /prvInsLosses
    $prvInsLosses,
    -- Field prvInsYrs at /prvInsYrs
    $prvInsYrs,
    -- Field request at /request
    $request,
    -- Field request/__v at /request/__v
    $request$__v,
    -- Field request/_id at /request/_id
    $request$_id,
    -- Field request/afrigisCode at /request/afrigisCode
    $request$afrigisCode,
    -- Field request/age at /request/age
    $request$age,
    -- Field request/allRiskCover at /request/allRiskCover
    $request$allRiskCover,
    -- Field request/bank at /request/bank
    $request$bank,
    -- Field request/bank/accountHolder at /request/bank/accountHolder
    $request$bank$accountHolder,
    -- Field request/bank/accountNo at /request/bank/accountNo
    $request$bank$accountNo,
    -- Field request/bank/accountType at /request/bank/accountType
    $request$bank$accountType,
    -- Field request/bank/bankId at /request/bank/bankId
    $request$bank$bankId,
    -- Field request/bank/debitOrderDay at /request/bank/debitOrderDay
    $request$bank$debitOrderDay,
    -- Field request/bank/paymentDetailsId at /request/bank/paymentDetailsId
    $request$bank$paymentDetailsId,
    -- Field request/bankAccount at /request/bankAccount
    $request$bankAccount,
    -- Field request/bankAccount/accountHolder at /request/bankAccount/accountHolder
    $request$bankAccount$accountHolder,
    -- Field request/bankAccount/accountNo at /request/bankAccount/accountNo
    $request$bankAccount$accountNo,
    -- Field request/bankAccount/accountType at /request/bankAccount/accountType
    $request$bankAccount$accountType,
    -- Field request/bankAccount/bankId at /request/bankAccount/bankId
    $request$bankAccount$bankId,
    -- Field request/bankAccount/bankName at /request/bankAccount/bankName
    $request$bankAccount$bankName,
    -- Field request/bankAccount/branchId at /request/bankAccount/branchId
    $request$bankAccount$branchId,
    -- Field request/boxCode at /request/boxCode
    $request$boxCode,
    -- Field request/cancelDate at /request/cancelDate
    $request$cancelDate,
    -- Field request/carCover at /request/carCover
    $request$carCover,
    -- Field request/causeType at /request/causeType
    $request$causeType,
    -- Field request/cellphoneNumber at /request/cellphoneNumber
    $request$cellphoneNumber,
    -- Field request/city at /request/city
    $request$city,
    -- Field request/claimFraudRejection at /request/claimFraudRejection
    $request$claimFraudRejection,
    -- Field request/claimsDates at /request/claimsDates
    $request$claimsDates,
    -- Field request/client at /request/client
    $request$client,
    -- Field request/client/age at /request/client/age
    $request$client$age,
    -- Field request/client/cellphoneNumber at /request/client/cellphoneNumber
    $request$client$cellphoneNumber,
    -- Field request/client/claimFraudRejection at /request/client/claimFraudRejection
    $request$client$claimFraudRejection,
    -- Field request/client/convictions at /request/client/convictions
    $request$client$convictions,
    -- Field request/client/dateOfBirth at /request/client/dateOfBirth
    $request$client$dateOfBirth,
    -- Field request/client/debtReview at /request/client/debtReview
    $request$client$debtReview,
    -- Field request/client/emailAddress at /request/client/emailAddress
    $request$client$emailAddress,
    -- Field request/client/firstName at /request/client/firstName
    $request$client$firstName,
    -- Field request/client/gender at /request/client/gender
    $request$client$gender,
    -- Field request/client/insolvent at /request/client/insolvent
    $request$client$insolvent,
    -- Field request/client/insuranceDeclined at /request/client/insuranceDeclined
    $request$client$insuranceDeclined,
    -- Field request/client/judgements at /request/client/judgements
    $request$client$judgements,
    -- Field request/client/lastName at /request/client/lastName
    $request$client$lastName,
    -- Field request/client/licenseDate at /request/client/licenseDate
    $request$client$licenseDate,
    -- Field request/client/licenseEndorsements at /request/client/licenseEndorsements
    $request$client$licenseEndorsements,
    -- Field request/client/licenseRestrictions at /request/client/licenseRestrictions
    $request$client$licenseRestrictions,
    -- Field request/client/licenseTypeCode at /request/client/licenseTypeCode
    $request$client$licenseTypeCode,
    -- Field request/client/maritalStatusCode at /request/client/maritalStatusCode
    $request$client$maritalStatusCode,
    -- Field request/client/prvInsLosses at /request/client/prvInsLosses
    $request$client$prvInsLosses,
    -- Field request/client/prvInsYrs at /request/client/prvInsYrs
    $request$client$prvInsYrs,
    -- Field request/client/rsaResident at /request/client/rsaResident
    $request$client$rsaResident,
    -- Field request/client/title at /request/client/title
    $request$client$title,
    -- Field request/client/underAdmin at /request/client/underAdmin
    $request$client$underAdmin,
    -- Field request/client/zaIdNumber at /request/client/zaIdNumber
    $request$client$zaIdNumber,
    -- Field request/commencementDate at /request/commencementDate
    $request$commencementDate,
    -- Field request/companyCode at /request/companyCode
    $request$companyCode,
    -- Field request/convictionDetails at /request/convictionDetails
    $request$convictionDetails,
    -- Field request/convictionDetails/yesOrNo at /request/convictionDetails/yesOrNo
    $request$convictionDetails$yesOrNo,
    -- Field request/convictions at /request/convictions
    $request$convictions,
    -- Field request/convictions/yesOrNo at /request/convictions/yesOrNo
    $request$convictions$yesOrNo,
    -- Field request/cover at /request/cover
    $request$cover,
    -- Field request/coverEndDate at /request/coverEndDate
    $request$coverEndDate,
    -- Field request/coverStartDate at /request/coverStartDate
    $request$coverStartDate,
    -- Field request/coverType at /request/coverType
    $request$coverType,
    -- Field request/coverType/code at /request/coverType/code
    $request$coverType$code,
    -- Field request/coverType/excessCode at /request/coverType/excessCode
    $request$coverType$excessCode,
    -- Field request/coverType/isMainCover at /request/coverType/isMainCover
    $request$coverType$isMainCover,
    -- Field request/coverType/name at /request/coverType/name
    $request$coverType$name,
    -- Field request/coverType/sumInsured at /request/coverType/sumInsured
    $request$coverType$sumInsured,
    -- Field request/createdAt at /request/createdAt
    $request$createdAt,
    -- Field request/dateOfBirth at /request/dateOfBirth
    $request$dateOfBirth,
    -- Field request/debitOrderDay at /request/debitOrderDay
    $request$debitOrderDay,
    -- Field request/debtReview at /request/debtReview
    $request$debtReview,
    -- Field request/declinatureMessages at /request/declinatureMessages
    $request$declinatureMessages,
    -- Field request/declined at /request/declined
    $request$declined,
    -- Field request/discountPercentage at /request/discountPercentage
    $request$discountPercentage,
    -- Field request/emailAddress at /request/emailAddress
    $request$emailAddress,
    -- Field request/endorsementInEffectDate at /request/endorsementInEffectDate
    $request$endorsementInEffectDate,
    -- Field request/eventType at /request/eventType
    $request$eventType,
    -- Field request/firstName at /request/firstName
    $request$firstName,
    -- Field request/flexibleDebitDate at /request/flexibleDebitDate
    $request$flexibleDebitDate,
    -- Field request/gender at /request/gender
    $request$gender,
    -- Field request/homeContentsCover at /request/homeContentsCover
    $request$homeContentsCover,
    -- Field request/id at /request/id
    $request$id,
    -- Field request/inEffectDate at /request/inEffectDate
    $request$inEffectDate,
    -- Field request/incidentDate at /request/incidentDate
    $request$incidentDate,
    -- Field request/incidentDescription at /request/incidentDescription
    $request$incidentDescription,
    -- Field request/incidentPlaceDescription at /request/incidentPlaceDescription
    $request$incidentPlaceDescription,
    -- Field request/incidentTime at /request/incidentTime
    $request$incidentTime,
    -- Field request/insolvent at /request/insolvent
    $request$insolvent,
    -- Field request/insurance at /request/insurance
    $request$insurance,
    -- Field request/insurance/yesOrNo at /request/insurance/yesOrNo
    $request$insurance$yesOrNo,
    -- Field request/insuranceDeclined at /request/insuranceDeclined
    $request$insuranceDeclined,
    -- Field request/insuranceType at /request/insuranceType
    $request$insuranceType,
    -- Field request/judgements at /request/judgements
    $request$judgements,
    -- Field request/lastModifiedDate at /request/lastModifiedDate
    $request$lastModifiedDate,
    -- Field request/lastName at /request/lastName
    $request$lastName,
    -- Field request/maritalStatusCode at /request/maritalStatusCode
    $request$maritalStatusCode,
    -- Field request/marketingCampaignId at /request/marketingCampaignId
    $request$marketingCampaignId,
    -- Field request/messages at /request/messages
    $request$messages,
    -- Field request/mustPrintPolicyDocuments at /request/mustPrintPolicyDocuments
    $request$mustPrintPolicyDocuments,
    -- Field request/params at /request/params
    $request$params,
    -- Field request/params/bankAccount at /request/params/bankAccount
    $request$params$bankAccount,
    -- Field request/params/bankAccount/accountHolder at /request/params/bankAccount/accountHolder
    $request$params$bankAccount$accountHolder,
    -- Field request/params/bankAccount/accountNo at /request/params/bankAccount/accountNo
    $request$params$bankAccount$accountNo,
    -- Field request/params/bankAccount/accountType at /request/params/bankAccount/accountType
    $request$params$bankAccount$accountType,
    -- Field request/params/bankAccount/bankId at /request/params/bankAccount/bankId
    $request$params$bankAccount$bankId,
    -- Field request/params/bankAccount/bankName at /request/params/bankAccount/bankName
    $request$params$bankAccount$bankName,
    -- Field request/params/debitOrderDay at /request/params/debitOrderDay
    $request$params$debitOrderDay,
    -- Field request/params/flexibleDebitDate at /request/params/flexibleDebitDate
    $request$params$flexibleDebitDate,
    -- Field request/paymentDetailsId at /request/paymentDetailsId
    $request$paymentDetailsId,
    -- Field request/paymentMethodId at /request/paymentMethodId
    $request$paymentMethodId,
    -- Field request/personType at /request/personType
    $request$personType,
    -- Field request/persons at /request/persons
    $request$persons,
    -- Field request/physicalAddress at /request/physicalAddress
    $request$physicalAddress,
    -- Field request/physicalAddress/_isComplexOrFlat at /request/physicalAddress/_isComplexOrFlat
    $request$physicalAddress$_isComplexOrFlat,
    -- Field request/physicalAddress/addressType at /request/physicalAddress/addressType
    $request$physicalAddress$addressType,
    -- Field request/physicalAddress/afrigisCode at /request/physicalAddress/afrigisCode
    $request$physicalAddress$afrigisCode,
    -- Field request/physicalAddress/boxCode at /request/physicalAddress/boxCode
    $request$physicalAddress$boxCode,
    -- Field request/physicalAddress/coords at /request/physicalAddress/coords
    $request$physicalAddress$coords,
    -- Field request/physicalAddress/coords/lat at /request/physicalAddress/coords/lat
    $request$physicalAddress$coords$lat,
    -- Field request/physicalAddress/coords/lon at /request/physicalAddress/coords/lon
    $request$physicalAddress$coords$lon,
    -- Field request/physicalAddress/country at /request/physicalAddress/country
    $request$physicalAddress$country,
    -- Field request/physicalAddress/countryCode at /request/physicalAddress/countryCode
    $request$physicalAddress$countryCode,
    -- Field request/physicalAddress/error at /request/physicalAddress/error
    $request$physicalAddress$error,
    -- Field request/physicalAddress/error/message at /request/physicalAddress/error/message
    $request$physicalAddress$error$message,
    -- Field request/physicalAddress/error/type at /request/physicalAddress/error/type
    $request$physicalAddress$error$type,
    -- Field request/physicalAddress/isComplexOrFlat at /request/physicalAddress/isComplexOrFlat
    $request$physicalAddress$isComplexOrFlat,
    -- Field request/physicalAddress/postArea at /request/physicalAddress/postArea
    $request$physicalAddress$postArea,
    -- Field request/physicalAddress/postalRegion at /request/physicalAddress/postalRegion
    $request$physicalAddress$postalRegion,
    -- Field request/physicalAddress/province at /request/physicalAddress/province
    $request$physicalAddress$province,
    -- Field request/physicalAddress/street at /request/physicalAddress/street
    $request$physicalAddress$street,
    -- Field request/physicalAddress/streetCode at /request/physicalAddress/streetCode
    $request$physicalAddress$streetCode,
    -- Field request/physicalAddress/streetNo at /request/physicalAddress/streetNo
    $request$physicalAddress$streetNo,
    -- Field request/physicalAddress/suburb at /request/physicalAddress/suburb
    $request$physicalAddress$suburb,
    -- Field request/physicalAddress/success at /request/physicalAddress/success
    $request$physicalAddress$success,
    -- Field request/physicalAddress/town at /request/physicalAddress/town
    $request$physicalAddress$town,
    -- Field request/policy at /request/policy
    $request$policy,
    -- Field request/policy/allRiskCover at /request/policy/allRiskCover
    $request$policy$allRiskCover,
    -- Field request/policy/cancelDate at /request/policy/cancelDate
    $request$policy$cancelDate,
    -- Field request/policy/coverEndDate at /request/policy/coverEndDate
    $request$policy$coverEndDate,
    -- Field request/policy/coverStartDate at /request/policy/coverStartDate
    $request$policy$coverStartDate,
    -- Field request/policy/homeContentsCover at /request/policy/homeContentsCover
    $request$policy$homeContentsCover,
    -- Field request/policy/lastModifiedDate at /request/policy/lastModifiedDate
    $request$policy$lastModifiedDate,
    -- Field request/policy/mustPrintPolicyDocuments at /request/policy/mustPrintPolicyDocuments
    $request$policy$mustPrintPolicyDocuments,
    -- Field request/policy/paymentDetailsId at /request/policy/paymentDetailsId
    $request$policy$paymentDetailsId,
    -- Field request/policy/policyHolderPersonId at /request/policy/policyHolderPersonId
    $request$policy$policyHolderPersonId,
    -- Field request/policy/policyNumber at /request/policy/policyNumber
    $request$policy$policyNumber,
    -- Field request/policy/renewalDate at /request/policy/renewalDate
    $request$policy$renewalDate,
    -- Field request/policy/savePolicyToDatabase at /request/policy/savePolicyToDatabase
    $request$policy$savePolicyToDatabase,
    -- Field request/policy/sequenceNo at /request/policy/sequenceNo
    $request$policy$sequenceNo,
    -- Field request/policy/status at /request/policy/status
    $request$policy$status,
    -- Field request/policy/totalPremium at /request/policy/totalPremium
    $request$policy$totalPremium,
    -- Field request/policyHolderPersonId at /request/policyHolderPersonId
    $request$policyHolderPersonId,
    -- Field request/policyLineNumber at /request/policyLineNumber
    $request$policyLineNumber,
    -- Field request/policyNo at /request/policyNo
    $request$policyNo,
    -- Field request/policyNumber at /request/policyNumber
    $request$policyNumber,
    -- Field request/policy_no at /request/policy_no
    $request$policy_no,
    -- Field request/postalAddress at /request/postalAddress
    $request$postalAddress,
    -- Field request/postalAddress/_isComplexOrFlat at /request/postalAddress/_isComplexOrFlat
    $request$postalAddress$_isComplexOrFlat,
    -- Field request/postalAddress/addressType at /request/postalAddress/addressType
    $request$postalAddress$addressType,
    -- Field request/postalAddress/afrigisCode at /request/postalAddress/afrigisCode
    $request$postalAddress$afrigisCode,
    -- Field request/postalAddress/boxCode at /request/postalAddress/boxCode
    $request$postalAddress$boxCode,
    -- Field request/postalAddress/coords at /request/postalAddress/coords
    $request$postalAddress$coords,
    -- Field request/postalAddress/coords/lat at /request/postalAddress/coords/lat
    $request$postalAddress$coords$lat,
    -- Field request/postalAddress/coords/lon at /request/postalAddress/coords/lon
    $request$postalAddress$coords$lon,
    -- Field request/postalAddress/country at /request/postalAddress/country
    $request$postalAddress$country,
    -- Field request/postalAddress/countryCode at /request/postalAddress/countryCode
    $request$postalAddress$countryCode,
    -- Field request/postalAddress/error at /request/postalAddress/error
    $request$postalAddress$error,
    -- Field request/postalAddress/error/message at /request/postalAddress/error/message
    $request$postalAddress$error$message,
    -- Field request/postalAddress/error/type at /request/postalAddress/error/type
    $request$postalAddress$error$type,
    -- Field request/postalAddress/isComplexOrFlat at /request/postalAddress/isComplexOrFlat
    $request$postalAddress$isComplexOrFlat,
    -- Field request/postalAddress/postArea at /request/postalAddress/postArea
    $request$postalAddress$postArea,
    -- Field request/postalAddress/postalRegion at /request/postalAddress/postalRegion
    $request$postalAddress$postalRegion,
    -- Field request/postalAddress/province at /request/postalAddress/province
    $request$postalAddress$province,
    -- Field request/postalAddress/street at /request/postalAddress/street
    $request$postalAddress$street,
    -- Field request/postalAddress/streetCode at /request/postalAddress/streetCode
    $request$postalAddress$streetCode,
    -- Field request/postalAddress/streetNo at /request/postalAddress/streetNo
    $request$postalAddress$streetNo,
    -- Field request/postalAddress/suburb at /request/postalAddress/suburb
    $request$postalAddress$suburb,
    -- Field request/postalAddress/success at /request/postalAddress/success
    $request$postalAddress$success,
    -- Field request/postalAddress/town at /request/postalAddress/town
    $request$postalAddress$town,
    -- Field request/prevInsYearFrom at /request/prevInsYearFrom
    $request$prevInsYearFrom,
    -- Field request/prevInsYearTo at /request/prevInsYearTo
    $request$prevInsYearTo,
    -- Field request/province at /request/province
    $request$province,
    -- Field request/prvInsLosses at /request/prvInsLosses
    $request$prvInsLosses,
    -- Field request/prvInsYrs at /request/prvInsYrs
    $request$prvInsYrs,
    -- Field request/quoteId at /request/quoteId
    $request$quoteId,
    -- Field request/quoteSessionInfo at /request/quoteSessionInfo
    $request$quoteSessionInfo,
    -- Field request/quoteSessionInfo/failureReason at /request/quoteSessionInfo/failureReason
    $request$quoteSessionInfo$failureReason,
    -- Field request/quoteSessionInfo/page at /request/quoteSessionInfo/page
    $request$quoteSessionInfo$page,
    -- Field request/quoteSessionInfo/source at /request/quoteSessionInfo/source
    $request$quoteSessionInfo$source,
    -- Field request/quoteSessionInfo/ucid at /request/quoteSessionInfo/ucid
    $request$quoteSessionInfo$ucid,
    -- Field request/referralMessages at /request/referralMessages
    $request$referralMessages,
    -- Field request/referred at /request/referred
    $request$referred,
    -- Field request/renewalDate at /request/renewalDate
    $request$renewalDate,
    -- Field request/rsaResident at /request/rsaResident
    $request$rsaResident,
    -- Field request/savePolicyToDatabase at /request/savePolicyToDatabase
    $request$savePolicyToDatabase,
    -- Field request/selectedPremium at /request/selectedPremium
    $request$selectedPremium,
    -- Field request/selectedPremium/excess at /request/selectedPremium/excess
    $request$selectedPremium$excess,
    -- Field request/selectedPremium/excessKey at /request/selectedPremium/excessKey
    $request$selectedPremium$excessKey,
    -- Field request/selectedPremium/premium at /request/selectedPremium/premium
    $request$selectedPremium$premium,
    -- Field request/selectedPremium/type at /request/selectedPremium/type
    $request$selectedPremium$type,
    -- Field request/sequenceNo at /request/sequenceNo
    $request$sequenceNo,
    -- Field request/status at /request/status
    $request$status,
    -- Field request/streetCode at /request/streetCode
    $request$streetCode,
    -- Field request/subCauseType at /request/subCauseType
    $request$subCauseType,
    -- Field request/suburb at /request/suburb
    $request$suburb,
    -- Field request/supporting_media at /request/supporting_media
    $request$supporting_media,
    -- Field request/title at /request/title
    $request$title,
    -- Field request/totalPremium at /request/totalPremium
    $request$totalPremium,
    -- Field request/town at /request/town
    $request$town,
    -- Field request/type at /request/type
    $request$type,
    -- Field request/underAdmin at /request/underAdmin
    $request$underAdmin,
    -- Field request/updatedAt at /request/updatedAt
    $request$updatedAt,
    -- Field request/userId at /request/userId
    $request$userId,
    -- Field request/user_id at /request/user_id
    $request$user_id,
    -- Field request/vehicle at /request/vehicle
    $request$vehicle,
    -- Field request/vehicle/__v at /request/vehicle/__v
    $request$vehicle$__v,
    -- Field request/vehicle/_id at /request/vehicle/_id
    $request$vehicle$_id,
    -- Field request/vehicle/accessories at /request/vehicle/accessories
    $request$vehicle$accessories,
    -- Field request/vehicle/accessoriesAmount at /request/vehicle/accessoriesAmount
    $request$vehicle$accessoriesAmount,
    -- Field request/vehicle/added_by at /request/vehicle/added_by
    $request$vehicle$added_by,
    -- Field request/vehicle/added_by/date at /request/vehicle/added_by/date
    $request$vehicle$added_by$date,
    -- Field request/vehicle/added_by/email at /request/vehicle/added_by/email
    $request$vehicle$added_by$email,
    -- Field request/vehicle/added_by/entity at /request/vehicle/added_by/entity
    $request$vehicle$added_by$entity,
    -- Field request/vehicle/added_by/platform at /request/vehicle/added_by/platform
    $request$vehicle$added_by$platform,
    -- Field request/vehicle/cancellationDate at /request/vehicle/cancellationDate
    $request$vehicle$cancellationDate,
    -- Field request/vehicle/carHire at /request/vehicle/carHire
    $request$vehicle$carHire,
    -- Field request/vehicle/car_hire_contribution at /request/vehicle/car_hire_contribution
    $request$vehicle$car_hire_contribution,
    -- Field request/vehicle/cashBack at /request/vehicle/cashBack
    $request$vehicle$cashBack,
    -- Field request/vehicle/category at /request/vehicle/category
    $request$vehicle$category,
    -- Field request/vehicle/colour at /request/vehicle/colour
    $request$vehicle$colour,
    -- Field request/vehicle/comprehensive_premium at /request/vehicle/comprehensive_premium
    $request$vehicle$comprehensive_premium,
    -- Field request/vehicle/coverStartDate at /request/vehicle/coverStartDate
    $request$vehicle$coverStartDate,
    -- Field request/vehicle/createdAt at /request/vehicle/createdAt
    $request$vehicle$createdAt,
    -- Field request/vehicle/creativeImage at /request/vehicle/creativeImage
    $request$vehicle$creativeImage,
    -- Field request/vehicle/creditShortFall at /request/vehicle/creditShortFall
    $request$vehicle$creditShortFall,
    -- Field request/vehicle/creditShortFall/compensationLimit at /request/vehicle/creditShortFall/compensationLimit
    $request$vehicle$creditShortFall$compensationLimit,
    -- Field request/vehicle/creditShortFall/excessCode at /request/vehicle/creditShortFall/excessCode
    $request$vehicle$creditShortFall$excessCode,
    -- Field request/vehicle/creditShortFall/monthlyInstallmentAmount at /request/vehicle/creditShortFall/monthlyInstallmentAmount
    $request$vehicle$creditShortFall$monthlyInstallmentAmount,
    -- Field request/vehicle/creditShortFall/outstandingLoanAmount at /request/vehicle/creditShortFall/outstandingLoanAmount
    $request$vehicle$creditShortFall$outstandingLoanAmount,
    -- Field request/vehicle/creditShortFall/outstandingLoanPeriod at /request/vehicle/creditShortFall/outstandingLoanPeriod
    $request$vehicle$creditShortFall$outstandingLoanPeriod,
    -- Field request/vehicle/creditShortFall/residualPaymentAmount at /request/vehicle/creditShortFall/residualPaymentAmount
    $request$vehicle$creditShortFall$residualPaymentAmount,
    -- Field request/vehicle/credit_shortfall_contribution at /request/vehicle/credit_shortfall_contribution
    $request$vehicle$credit_shortfall_contribution,
    -- Field request/vehicle/dayAddress at /request/vehicle/dayAddress
    $request$vehicle$dayAddress,
    -- Field request/vehicle/dayAddress/_isComplexOrFlat at /request/vehicle/dayAddress/_isComplexOrFlat
    $request$vehicle$dayAddress$_isComplexOrFlat,
    -- Field request/vehicle/dayAddress/addressType at /request/vehicle/dayAddress/addressType
    $request$vehicle$dayAddress$addressType,
    -- Field request/vehicle/dayAddress/afrigisAddress at /request/vehicle/dayAddress/afrigisAddress
    $request$vehicle$dayAddress$afrigisAddress,
    -- Field request/vehicle/dayAddress/afrigisCode at /request/vehicle/dayAddress/afrigisCode
    $request$vehicle$dayAddress$afrigisCode,
    -- Field request/vehicle/dayAddress/agencyBoxNo at /request/vehicle/dayAddress/agencyBoxNo
    $request$vehicle$dayAddress$agencyBoxNo,
    -- Field request/vehicle/dayAddress/boxCode at /request/vehicle/dayAddress/boxCode
    $request$vehicle$dayAddress$boxCode,
    -- Field request/vehicle/dayAddress/buildingName at /request/vehicle/dayAddress/buildingName
    $request$vehicle$dayAddress$buildingName,
    -- Field request/vehicle/dayAddress/country at /request/vehicle/dayAddress/country
    $request$vehicle$dayAddress$country,
    -- Field request/vehicle/dayAddress/countryCode at /request/vehicle/dayAddress/countryCode
    $request$vehicle$dayAddress$countryCode,
    -- Field request/vehicle/dayAddress/dayPopDensityCategory at /request/vehicle/dayAddress/dayPopDensityCategory
    $request$vehicle$dayAddress$dayPopDensityCategory,
    -- Field request/vehicle/dayAddress/dwellingNo at /request/vehicle/dayAddress/dwellingNo
    $request$vehicle$dayAddress$dwellingNo,
    -- Field request/vehicle/dayAddress/error at /request/vehicle/dayAddress/error
    $request$vehicle$dayAddress$error,
    -- Field request/vehicle/dayAddress/footPrintSize at /request/vehicle/dayAddress/footPrintSize
    $request$vehicle$dayAddress$footPrintSize,
    -- Field request/vehicle/dayAddress/full at /request/vehicle/dayAddress/full
    $request$vehicle$dayAddress$full,
    -- Field request/vehicle/dayAddress/googleAddress at /request/vehicle/dayAddress/googleAddress
    $request$vehicle$dayAddress$googleAddress,
    -- Field request/vehicle/dayAddress/isComplexOrFlat at /request/vehicle/dayAddress/isComplexOrFlat
    $request$vehicle$dayAddress$isComplexOrFlat,
    -- Field request/vehicle/dayAddress/lat at /request/vehicle/dayAddress/lat
    $request$vehicle$dayAddress$lat,
    -- Field request/vehicle/dayAddress/lon at /request/vehicle/dayAddress/lon
    $request$vehicle$dayAddress$lon,
    -- Field request/vehicle/dayAddress/nightPopDensityCategory at /request/vehicle/dayAddress/nightPopDensityCategory
    $request$vehicle$dayAddress$nightPopDensityCategory,
    -- Field request/vehicle/dayAddress/poBoxNumber at /request/vehicle/dayAddress/poBoxNumber
    $request$vehicle$dayAddress$poBoxNumber,
    -- Field request/vehicle/dayAddress/postArea at /request/vehicle/dayAddress/postArea
    $request$vehicle$dayAddress$postArea,
    -- Field request/vehicle/dayAddress/postalRegion at /request/vehicle/dayAddress/postalRegion
    $request$vehicle$dayAddress$postalRegion,
    -- Field request/vehicle/dayAddress/privateBagNo at /request/vehicle/dayAddress/privateBagNo
    $request$vehicle$dayAddress$privateBagNo,
    -- Field request/vehicle/dayAddress/propertyKey at /request/vehicle/dayAddress/propertyKey
    $request$vehicle$dayAddress$propertyKey,
    -- Field request/vehicle/dayAddress/province at /request/vehicle/dayAddress/province
    $request$vehicle$dayAddress$province,
    -- Field request/vehicle/dayAddress/riskscapeAddress at /request/vehicle/dayAddress/riskscapeAddress
    $request$vehicle$dayAddress$riskscapeAddress,
    -- Field request/vehicle/dayAddress/sectionId at /request/vehicle/dayAddress/sectionId
    $request$vehicle$dayAddress$sectionId,
    -- Field request/vehicle/dayAddress/street at /request/vehicle/dayAddress/street
    $request$vehicle$dayAddress$street,
    -- Field request/vehicle/dayAddress/streetCode at /request/vehicle/dayAddress/streetCode
    $request$vehicle$dayAddress$streetCode,
    -- Field request/vehicle/dayAddress/streetNo at /request/vehicle/dayAddress/streetNo
    $request$vehicle$dayAddress$streetNo,
    -- Field request/vehicle/dayAddress/subplaceId at /request/vehicle/dayAddress/subplaceId
    $request$vehicle$dayAddress$subplaceId,
    -- Field request/vehicle/dayAddress/suburb at /request/vehicle/dayAddress/suburb
    $request$vehicle$dayAddress$suburb,
    -- Field request/vehicle/dayAddress/success at /request/vehicle/dayAddress/success
    $request$vehicle$dayAddress$success,
    -- Field request/vehicle/dayAddress/town at /request/vehicle/dayAddress/town
    $request$vehicle$dayAddress$town,
    -- Field request/vehicle/dayAddress/unitNo at /request/vehicle/dayAddress/unitNo
    $request$vehicle$dayAddress$unitNo,
    -- Field request/vehicle/dayAddress/villageName at /request/vehicle/dayAddress/villageName
    $request$vehicle$dayAddress$villageName,
    -- Field request/vehicle/dealership_code at /request/vehicle/dealership_code
    $request$vehicle$dealership_code,
    -- Field request/vehicle/deleted at /request/vehicle/deleted
    $request$vehicle$deleted,
    -- Field request/vehicle/disability at /request/vehicle/disability
    $request$vehicle$disability,
    -- Field request/vehicle/disabilityDescription at /request/vehicle/disabilityDescription
    $request$vehicle$disabilityDescription,
    -- Field request/vehicle/engineNo at /request/vehicle/engineNo
    $request$vehicle$engineNo,
    -- Field request/vehicle/engineNumber at /request/vehicle/engineNumber
    $request$vehicle$engineNumber,
    -- Field request/vehicle/engineSize at /request/vehicle/engineSize
    $request$vehicle$engineSize,
    -- Field request/vehicle/excess at /request/vehicle/excess
    $request$vehicle$excess,
    -- Field request/vehicle/existingDamage at /request/vehicle/existingDamage
    $request$vehicle$existingDamage,
    -- Field request/vehicle/external_lead_source at /request/vehicle/external_lead_source
    $request$vehicle$external_lead_source,
    -- Field request/vehicle/financeDetails at /request/vehicle/financeDetails
    $request$vehicle$financeDetails,
    -- Field request/vehicle/financeDetails/compensationLimit at /request/vehicle/financeDetails/compensationLimit
    $request$vehicle$financeDetails$compensationLimit,
    -- Field request/vehicle/financeDetails/creditShortfallApplies at /request/vehicle/financeDetails/creditShortfallApplies
    $request$vehicle$financeDetails$creditShortfallApplies,
    -- Field request/vehicle/financeDetails/excessCode at /request/vehicle/financeDetails/excessCode
    $request$vehicle$financeDetails$excessCode,
    -- Field request/vehicle/financeDetails/financeHouseCode at /request/vehicle/financeDetails/financeHouseCode
    $request$vehicle$financeDetails$financeHouseCode,
    -- Field request/vehicle/financeDetails/financeHouseName at /request/vehicle/financeDetails/financeHouseName
    $request$vehicle$financeDetails$financeHouseName,
    -- Field request/vehicle/financeDetails/monthlyInstallmentAmount at /request/vehicle/financeDetails/monthlyInstallmentAmount
    $request$vehicle$financeDetails$monthlyInstallmentAmount,
    -- Field request/vehicle/financeDetails/outstandingLoanAmount at /request/vehicle/financeDetails/outstandingLoanAmount
    $request$vehicle$financeDetails$outstandingLoanAmount,
    -- Field request/vehicle/financeDetails/outstandingLoanPeriod at /request/vehicle/financeDetails/outstandingLoanPeriod
    $request$vehicle$financeDetails$outstandingLoanPeriod,
    -- Field request/vehicle/financeDetails/residualPaymentAmount at /request/vehicle/financeDetails/residualPaymentAmount
    $request$vehicle$financeDetails$residualPaymentAmount,
    -- Field request/vehicle/financeHouseCode at /request/vehicle/financeHouseCode
    $request$vehicle$financeHouseCode,
    -- Field request/vehicle/financeHouseName at /request/vehicle/financeHouseName
    $request$vehicle$financeHouseName,
    -- Field request/vehicle/financed at /request/vehicle/financed
    $request$vehicle$financed,
    -- Field request/vehicle/fuelType at /request/vehicle/fuelType
    $request$vehicle$fuelType,
    -- Field request/vehicle/horsePower at /request/vehicle/horsePower
    $request$vehicle$horsePower,
    -- Field request/vehicle/imageId at /request/vehicle/imageId
    $request$vehicle$imageId,
    -- Field request/vehicle/insured at /request/vehicle/insured
    $request$vehicle$insured,
    -- Field request/vehicle/insuredAt at /request/vehicle/insuredAt
    $request$vehicle$insuredAt,
    -- Field request/vehicle/intercomVehicleNo at /request/vehicle/intercomVehicleNo
    $request$vehicle$intercomVehicleNo,
    -- Field request/vehicle/iwyze_object_no at /request/vehicle/iwyze_object_no
    $request$vehicle$iwyze_object_no,
    -- Field request/vehicle/iwyze_object_no_ at /request/vehicle/iwyze_object_no_
    $request$vehicle$iwyze_object_no_,
    -- Field request/vehicle/iwyze_object_number at /request/vehicle/iwyze_object_number
    $request$vehicle$iwyze_object_number,
    -- Field request/vehicle/iwyze_policy_line_no at /request/vehicle/iwyze_policy_line_no
    $request$vehicle$iwyze_policy_line_no,
    -- Field request/vehicle/iwyze_policy_line_no_ at /request/vehicle/iwyze_policy_line_no_
    $request$vehicle$iwyze_policy_line_no_,
    -- Field request/vehicle/iwyze_policy_line_number at /request/vehicle/iwyze_policy_line_number
    $request$vehicle$iwyze_policy_line_number,
    -- Field request/vehicle/iwyze_policy_no at /request/vehicle/iwyze_policy_no
    $request$vehicle$iwyze_policy_no,
    -- Field request/vehicle/iwyzw_policy_line_no at /request/vehicle/iwyzw_policy_line_no
    $request$vehicle$iwyzw_policy_line_no,
    -- Field request/vehicle/iywze_object_number at /request/vehicle/iywze_object_number
    $request$vehicle$iywze_object_number,
    -- Field request/vehicle/lastSyncDate at /request/vehicle/lastSyncDate
    $request$vehicle$lastSyncDate,
    -- Field request/vehicle/lastSyncReason at /request/vehicle/lastSyncReason
    $request$vehicle$lastSyncReason,
    -- Field request/vehicle/lowMileageBooster at /request/vehicle/lowMileageBooster
    $request$vehicle$lowMileageBooster,
    -- Field request/vehicle/low_mileage_premium at /request/vehicle/low_mileage_premium
    $request$vehicle$low_mileage_premium,
    -- Field request/vehicle/make at /request/vehicle/make
    $request$vehicle$make,
    -- Field request/vehicle/manualAuto at /request/vehicle/manualAuto
    $request$vehicle$manualAuto,
    -- Field request/vehicle/marketPrice at /request/vehicle/marketPrice
    $request$vehicle$marketPrice,
    -- Field request/vehicle/metallic at /request/vehicle/metallic
    $request$vehicle$metallic,
    -- Field request/vehicle/mmcode at /request/vehicle/mmcode
    $request$vehicle$mmcode,
    -- Field request/vehicle/model at /request/vehicle/model
    $request$vehicle$model,
    -- Field request/vehicle/modified at /request/vehicle/modified
    $request$vehicle$modified,
    -- Field request/vehicle/monthly_trips at /request/vehicle/monthly_trips
    $request$vehicle$monthly_trips,
    -- Field request/vehicle/monthly_trips/2021-07-31 at /request/vehicle/monthly_trips/2021-07-31
    $request$vehicle$monthly_trips$2021_07_31,
    -- Field request/vehicle/monthly_trips/2021-08-31 at /request/vehicle/monthly_trips/2021-08-31
    $request$vehicle$monthly_trips$2021_08_31,
    -- Field request/vehicle/monthly_trips/2021-09-30 at /request/vehicle/monthly_trips/2021-09-30
    $request$vehicle$monthly_trips$2021_09_30,
    -- Field request/vehicle/monthly_trips/2021-10-31 at /request/vehicle/monthly_trips/2021-10-31
    $request$vehicle$monthly_trips$2021_10_31,
    -- Field request/vehicle/monthly_trips/2021-11-30 at /request/vehicle/monthly_trips/2021-11-30
    $request$vehicle$monthly_trips$2021_11_30,
    -- Field request/vehicle/monthly_trips/2021-12-31 at /request/vehicle/monthly_trips/2021-12-31
    $request$vehicle$monthly_trips$2021_12_31,
    -- Field request/vehicle/monthly_trips/2022-01-31 at /request/vehicle/monthly_trips/2022-01-31
    $request$vehicle$monthly_trips$2022_01_31,
    -- Field request/vehicle/monthly_trips/2022-02-28 at /request/vehicle/monthly_trips/2022-02-28
    $request$vehicle$monthly_trips$2022_02_28,
    -- Field request/vehicle/monthly_trips/2022-03-31 at /request/vehicle/monthly_trips/2022-03-31
    $request$vehicle$monthly_trips$2022_03_31,
    -- Field request/vehicle/monthly_trips/2022-04-30 at /request/vehicle/monthly_trips/2022-04-30
    $request$vehicle$monthly_trips$2022_04_30,
    -- Field request/vehicle/monthly_trips/2022-05-31 at /request/vehicle/monthly_trips/2022-05-31
    $request$vehicle$monthly_trips$2022_05_31,
    -- Field request/vehicle/monthly_trips/2022-06-30 at /request/vehicle/monthly_trips/2022-06-30
    $request$vehicle$monthly_trips$2022_06_30,
    -- Field request/vehicle/monthly_trips/2022-07-31 at /request/vehicle/monthly_trips/2022-07-31
    $request$vehicle$monthly_trips$2022_07_31,
    -- Field request/vehicle/monthly_trips/2022-08-31 at /request/vehicle/monthly_trips/2022-08-31
    $request$vehicle$monthly_trips$2022_08_31,
    -- Field request/vehicle/motor_policy_number at /request/vehicle/motor_policy_number
    $request$vehicle$motor_policy_number,
    -- Field request/vehicle/motor_quote_number at /request/vehicle/motor_quote_number
    $request$vehicle$motor_quote_number,
    -- Field request/vehicle/nightAddress at /request/vehicle/nightAddress
    $request$vehicle$nightAddress,
    -- Field request/vehicle/nightAddress/afrigisAddress at /request/vehicle/nightAddress/afrigisAddress
    $request$vehicle$nightAddress$afrigisAddress,
    -- Field request/vehicle/nightAddress/full at /request/vehicle/nightAddress/full
    $request$vehicle$nightAddress$full,
    -- Field request/vehicle/nightAddress/googleAddress at /request/vehicle/nightAddress/googleAddress
    $request$vehicle$nightAddress$googleAddress,
    -- Field request/vehicle/nightAddress/riskscapeAddress at /request/vehicle/nightAddress/riskscapeAddress
    $request$vehicle$nightAddress$riskscapeAddress,
    -- Field request/vehicle/nightSecurity at /request/vehicle/nightSecurity
    $request$vehicle$nightSecurity,
    -- Field request/vehicle/nightSituation at /request/vehicle/nightSituation
    $request$vehicle$nightSituation,
    -- Field request/vehicle/nightStructure at /request/vehicle/nightStructure
    $request$vehicle$nightStructure,
    -- Field request/vehicle/options at /request/vehicle/options
    $request$vehicle$options,
    -- Field request/vehicle/options/coverStartDate at /request/vehicle/options/coverStartDate
    $request$vehicle$options$coverStartDate,
    -- Field request/vehicle/options/hasCarHire at /request/vehicle/options/hasCarHire
    $request$vehicle$options$hasCarHire,
    -- Field request/vehicle/options/hasCreditShortfall at /request/vehicle/options/hasCreditShortfall
    $request$vehicle$options$hasCreditShortfall,
    -- Field request/vehicle/options/hasLowMileage at /request/vehicle/options/hasLowMileage
    $request$vehicle$options$hasLowMileage,
    -- Field request/vehicle/owner at /request/vehicle/owner
    $request$vehicle$owner,
    -- Field request/vehicle/ownerInfo at /request/vehicle/ownerInfo
    $request$vehicle$ownerInfo,
    -- Field request/vehicle/ownerInfo/firstName at /request/vehicle/ownerInfo/firstName
    $request$vehicle$ownerInfo$firstName,
    -- Field request/vehicle/ownerInfo/id at /request/vehicle/ownerInfo/id
    $request$vehicle$ownerInfo$id,
    -- Field request/vehicle/ownerInfo/lastName at /request/vehicle/ownerInfo/lastName
    $request$vehicle$ownerInfo$lastName,
    -- Field request/vehicle/ownerPerson at /request/vehicle/ownerPerson
    $request$vehicle$ownerPerson,
    -- Field request/vehicle/ownerPerson/age at /request/vehicle/ownerPerson/age
    $request$vehicle$ownerPerson$age,
    -- Field request/vehicle/ownerPerson/cellphoneNumber at /request/vehicle/ownerPerson/cellphoneNumber
    $request$vehicle$ownerPerson$cellphoneNumber,
    -- Field request/vehicle/ownerPerson/claimDates at /request/vehicle/ownerPerson/claimDates
    $request$vehicle$ownerPerson$claimDates,
    -- Field request/vehicle/ownerPerson/claimFraudRejection at /request/vehicle/ownerPerson/claimFraudRejection
    $request$vehicle$ownerPerson$claimFraudRejection,
    -- Field request/vehicle/ownerPerson/convictions at /request/vehicle/ownerPerson/convictions
    $request$vehicle$ownerPerson$convictions,
    -- Field request/vehicle/ownerPerson/dateOfBirth at /request/vehicle/ownerPerson/dateOfBirth
    $request$vehicle$ownerPerson$dateOfBirth,
    -- Field request/vehicle/ownerPerson/debtReview at /request/vehicle/ownerPerson/debtReview
    $request$vehicle$ownerPerson$debtReview,
    -- Field request/vehicle/ownerPerson/emailAddress at /request/vehicle/ownerPerson/emailAddress
    $request$vehicle$ownerPerson$emailAddress,
    -- Field request/vehicle/ownerPerson/firstName at /request/vehicle/ownerPerson/firstName
    $request$vehicle$ownerPerson$firstName,
    -- Field request/vehicle/ownerPerson/gender at /request/vehicle/ownerPerson/gender
    $request$vehicle$ownerPerson$gender,
    -- Field request/vehicle/ownerPerson/insolvent at /request/vehicle/ownerPerson/insolvent
    $request$vehicle$ownerPerson$insolvent,
    -- Field request/vehicle/ownerPerson/insuranceDeclined at /request/vehicle/ownerPerson/insuranceDeclined
    $request$vehicle$ownerPerson$insuranceDeclined,
    -- Field request/vehicle/ownerPerson/judgements at /request/vehicle/ownerPerson/judgements
    $request$vehicle$ownerPerson$judgements,
    -- Field request/vehicle/ownerPerson/lastName at /request/vehicle/ownerPerson/lastName
    $request$vehicle$ownerPerson$lastName,
    -- Field request/vehicle/ownerPerson/licenseDate at /request/vehicle/ownerPerson/licenseDate
    $request$vehicle$ownerPerson$licenseDate,
    -- Field request/vehicle/ownerPerson/licenseEndorsements at /request/vehicle/ownerPerson/licenseEndorsements
    $request$vehicle$ownerPerson$licenseEndorsements,
    -- Field request/vehicle/ownerPerson/licenseRestrictions at /request/vehicle/ownerPerson/licenseRestrictions
    $request$vehicle$ownerPerson$licenseRestrictions,
    -- Field request/vehicle/ownerPerson/licenseTypeCode at /request/vehicle/ownerPerson/licenseTypeCode
    $request$vehicle$ownerPerson$licenseTypeCode,
    -- Field request/vehicle/ownerPerson/maritalStatusCode at /request/vehicle/ownerPerson/maritalStatusCode
    $request$vehicle$ownerPerson$maritalStatusCode,
    -- Field request/vehicle/ownerPerson/motorLossCount at /request/vehicle/ownerPerson/motorLossCount
    $request$vehicle$ownerPerson$motorLossCount,
    -- Field request/vehicle/ownerPerson/partyId at /request/vehicle/ownerPerson/partyId
    $request$vehicle$ownerPerson$partyId,
    -- Field request/vehicle/ownerPerson/personType at /request/vehicle/ownerPerson/personType
    $request$vehicle$ownerPerson$personType,
    -- Field request/vehicle/ownerPerson/physicalAddress at /request/vehicle/ownerPerson/physicalAddress
    $request$vehicle$ownerPerson$physicalAddress,
    -- Field request/vehicle/ownerPerson/postalAddress at /request/vehicle/ownerPerson/postalAddress
    $request$vehicle$ownerPerson$postalAddress,
    -- Field request/vehicle/ownerPerson/prvInsLosses at /request/vehicle/ownerPerson/prvInsLosses
    $request$vehicle$ownerPerson$prvInsLosses,
    -- Field request/vehicle/ownerPerson/prvInsYrs at /request/vehicle/ownerPerson/prvInsYrs
    $request$vehicle$ownerPerson$prvInsYrs,
    -- Field request/vehicle/ownerPerson/rsaResident at /request/vehicle/ownerPerson/rsaResident
    $request$vehicle$ownerPerson$rsaResident,
    -- Field request/vehicle/ownerPerson/title at /request/vehicle/ownerPerson/title
    $request$vehicle$ownerPerson$title,
    -- Field request/vehicle/ownerPerson/underAdmin at /request/vehicle/ownerPerson/underAdmin
    $request$vehicle$ownerPerson$underAdmin,
    -- Field request/vehicle/ownerPerson/userId at /request/vehicle/ownerPerson/userId
    $request$vehicle$ownerPerson$userId,
    -- Field request/vehicle/ownerPerson/zaIdNumber at /request/vehicle/ownerPerson/zaIdNumber
    $request$vehicle$ownerPerson$zaIdNumber,
    -- Field request/vehicle/partyIsRegularDriver at /request/vehicle/partyIsRegularDriver
    $request$vehicle$partyIsRegularDriver,
    -- Field request/vehicle/policyLineNumber at /request/vehicle/policyLineNumber
    $request$vehicle$policyLineNumber,
    -- Field request/vehicle/policySummary at /request/vehicle/policySummary
    $request$vehicle$policySummary,
    -- Field request/vehicle/policySummary/basicExcess at /request/vehicle/policySummary/basicExcess
    $request$vehicle$policySummary$basicExcess,
    -- Field request/vehicle/policySummary/coverType at /request/vehicle/policySummary/coverType
    $request$vehicle$policySummary$coverType,
    -- Field request/vehicle/policySummary/debitDate at /request/vehicle/policySummary/debitDate
    $request$vehicle$policySummary$debitDate,
    -- Field request/vehicle/policySummary/insuredAmount at /request/vehicle/policySummary/insuredAmount
    $request$vehicle$policySummary$insuredAmount,
    -- Field request/vehicle/policySummary/policyLineNumber at /request/vehicle/policySummary/policyLineNumber
    $request$vehicle$policySummary$policyLineNumber,
    -- Field request/vehicle/policySummary/policyNumber at /request/vehicle/policySummary/policyNumber
    $request$vehicle$policySummary$policyNumber,
    -- Field request/vehicle/policySummary/premiumAmount at /request/vehicle/policySummary/premiumAmount
    $request$vehicle$policySummary$premiumAmount,
    -- Field request/vehicle/policySummary/sasriaAmount at /request/vehicle/policySummary/sasriaAmount
    $request$vehicle$policySummary$sasriaAmount,
    -- Field request/vehicle/preInspectionId at /request/vehicle/preInspectionId
    $request$vehicle$preInspectionId,
    -- Field request/vehicle/productCode at /request/vehicle/productCode
    $request$vehicle$productCode,
    -- Field request/vehicle/productId at /request/vehicle/productId
    $request$vehicle$productId,
    -- Field request/vehicle/quoteCompleteFirstDate at /request/vehicle/quoteCompleteFirstDate
    $request$vehicle$quoteCompleteFirstDate,
    -- Field request/vehicle/quoted_by at /request/vehicle/quoted_by
    $request$vehicle$quoted_by,
    -- Field request/vehicle/quoted_by/date at /request/vehicle/quoted_by/date
    $request$vehicle$quoted_by$date,
    -- Field request/vehicle/quoted_by/email at /request/vehicle/quoted_by/email
    $request$vehicle$quoted_by$email,
    -- Field request/vehicle/quoted_by/entity at /request/vehicle/quoted_by/entity
    $request$vehicle$quoted_by$entity,
    -- Field request/vehicle/quoted_by/platform at /request/vehicle/quoted_by/platform
    $request$vehicle$quoted_by$platform,
    -- Field request/vehicle/registration at /request/vehicle/registration
    $request$vehicle$registration,
    -- Field request/vehicle/regularDriver at /request/vehicle/regularDriver
    $request$vehicle$regularDriver,
    -- Field request/vehicle/regularDriverInfo at /request/vehicle/regularDriverInfo
    $request$vehicle$regularDriverInfo,
    -- Field request/vehicle/regularDriverInfo/_id at /request/vehicle/regularDriverInfo/_id
    $request$vehicle$regularDriverInfo$_id,
    -- Field request/vehicle/regularDriverInfo/addedByUserId at /request/vehicle/regularDriverInfo/addedByUserId
    $request$vehicle$regularDriverInfo$addedByUserId,
    -- Field request/vehicle/regularDriverInfo/cellphoneNumber at /request/vehicle/regularDriverInfo/cellphoneNumber
    $request$vehicle$regularDriverInfo$cellphoneNumber,
    -- Field request/vehicle/regularDriverInfo/claimsDates at /request/vehicle/regularDriverInfo/claimsDates
    $request$vehicle$regularDriverInfo$claimsDates,
    -- Field request/vehicle/regularDriverInfo/clientId at /request/vehicle/regularDriverInfo/clientId
    $request$vehicle$regularDriverInfo$clientId,
    -- Field request/vehicle/regularDriverInfo/employmentStatusCode at /request/vehicle/regularDriverInfo/employmentStatusCode
    $request$vehicle$regularDriverInfo$employmentStatusCode,
    -- Field request/vehicle/regularDriverInfo/firstName at /request/vehicle/regularDriverInfo/firstName
    $request$vehicle$regularDriverInfo$firstName,
    -- Field request/vehicle/regularDriverInfo/homeAddress at /request/vehicle/regularDriverInfo/homeAddress
    $request$vehicle$regularDriverInfo$homeAddress,
    -- Field request/vehicle/regularDriverInfo/id at /request/vehicle/regularDriverInfo/id
    $request$vehicle$regularDriverInfo$id,
    -- Field request/vehicle/regularDriverInfo/insolvent at /request/vehicle/regularDriverInfo/insolvent
    $request$vehicle$regularDriverInfo$insolvent,
    -- Field request/vehicle/regularDriverInfo/judgements at /request/vehicle/regularDriverInfo/judgements
    $request$vehicle$regularDriverInfo$judgements,
    -- Field request/vehicle/regularDriverInfo/lastName at /request/vehicle/regularDriverInfo/lastName
    $request$vehicle$regularDriverInfo$lastName,
    -- Field request/vehicle/regularDriverInfo/licenseDate at /request/vehicle/regularDriverInfo/licenseDate
    $request$vehicle$regularDriverInfo$licenseDate,
    -- Field request/vehicle/regularDriverInfo/licenseExpiryDate at /request/vehicle/regularDriverInfo/licenseExpiryDate
    $request$vehicle$regularDriverInfo$licenseExpiryDate,
    -- Field request/vehicle/regularDriverInfo/licenseRestrictionsCode at /request/vehicle/regularDriverInfo/licenseRestrictionsCode
    $request$vehicle$regularDriverInfo$licenseRestrictionsCode,
    -- Field request/vehicle/regularDriverInfo/licenseTypeCode at /request/vehicle/regularDriverInfo/licenseTypeCode
    $request$vehicle$regularDriverInfo$licenseTypeCode,
    -- Field request/vehicle/regularDriverInfo/maritalStatusCode at /request/vehicle/regularDriverInfo/maritalStatusCode
    $request$vehicle$regularDriverInfo$maritalStatusCode,
    -- Field request/vehicle/regularDriverInfo/personType at /request/vehicle/regularDriverInfo/personType
    $request$vehicle$regularDriverInfo$personType,
    -- Field request/vehicle/regularDriverInfo/prvInsLosses at /request/vehicle/regularDriverInfo/prvInsLosses
    $request$vehicle$regularDriverInfo$prvInsLosses,
    -- Field request/vehicle/regularDriverInfo/prvInsYrs at /request/vehicle/regularDriverInfo/prvInsYrs
    $request$vehicle$regularDriverInfo$prvInsYrs,
    -- Field request/vehicle/regularDriverInfo/relationCode at /request/vehicle/regularDriverInfo/relationCode
    $request$vehicle$regularDriverInfo$relationCode,
    -- Field request/vehicle/regularDriverInfo/relationToClientCode at /request/vehicle/regularDriverInfo/relationToClientCode
    $request$vehicle$regularDriverInfo$relationToClientCode,
    -- Field request/vehicle/regularDriverInfo/relationshipCode at /request/vehicle/regularDriverInfo/relationshipCode
    $request$vehicle$regularDriverInfo$relationshipCode,
    -- Field request/vehicle/regularDriverInfo/title at /request/vehicle/regularDriverInfo/title
    $request$vehicle$regularDriverInfo$title,
    -- Field request/vehicle/regularDriverInfo/user_id at /request/vehicle/regularDriverInfo/user_id
    $request$vehicle$regularDriverInfo$user_id,
    -- Field request/vehicle/regularDriverInfo/zaIdNumber at /request/vehicle/regularDriverInfo/zaIdNumber
    $request$vehicle$regularDriverInfo$zaIdNumber,
    -- Field request/vehicle/regularDriverPerson at /request/vehicle/regularDriverPerson
    $request$vehicle$regularDriverPerson,
    -- Field request/vehicle/regularDriverPerson/age at /request/vehicle/regularDriverPerson/age
    $request$vehicle$regularDriverPerson$age,
    -- Field request/vehicle/regularDriverPerson/cellphoneNumber at /request/vehicle/regularDriverPerson/cellphoneNumber
    $request$vehicle$regularDriverPerson$cellphoneNumber,
    -- Field request/vehicle/regularDriverPerson/dateOfBirth at /request/vehicle/regularDriverPerson/dateOfBirth
    $request$vehicle$regularDriverPerson$dateOfBirth,
    -- Field request/vehicle/regularDriverPerson/emailAddress at /request/vehicle/regularDriverPerson/emailAddress
    $request$vehicle$regularDriverPerson$emailAddress,
    -- Field request/vehicle/regularDriverPerson/firstName at /request/vehicle/regularDriverPerson/firstName
    $request$vehicle$regularDriverPerson$firstName,
    -- Field request/vehicle/regularDriverPerson/gender at /request/vehicle/regularDriverPerson/gender
    $request$vehicle$regularDriverPerson$gender,
    -- Field request/vehicle/regularDriverPerson/lastName at /request/vehicle/regularDriverPerson/lastName
    $request$vehicle$regularDriverPerson$lastName,
    -- Field request/vehicle/regularDriverPerson/licenseDate at /request/vehicle/regularDriverPerson/licenseDate
    $request$vehicle$regularDriverPerson$licenseDate,
    -- Field request/vehicle/regularDriverPerson/licenseTypeCode at /request/vehicle/regularDriverPerson/licenseTypeCode
    $request$vehicle$regularDriverPerson$licenseTypeCode,
    -- Field request/vehicle/regularDriverPerson/maritalStatusCode at /request/vehicle/regularDriverPerson/maritalStatusCode
    $request$vehicle$regularDriverPerson$maritalStatusCode,
    -- Field request/vehicle/regularDriverPerson/olderAge at /request/vehicle/regularDriverPerson/olderAge
    $request$vehicle$regularDriverPerson$olderAge,
    -- Field request/vehicle/regularDriverPerson/personType at /request/vehicle/regularDriverPerson/personType
    $request$vehicle$regularDriverPerson$personType,
    -- Field request/vehicle/regularDriverPerson/physicalAddress at /request/vehicle/regularDriverPerson/physicalAddress
    $request$vehicle$regularDriverPerson$physicalAddress,
    -- Field request/vehicle/regularDriverPerson/postalAddress at /request/vehicle/regularDriverPerson/postalAddress
    $request$vehicle$regularDriverPerson$postalAddress,
    -- Field request/vehicle/regularDriverPerson/relationToClientCode at /request/vehicle/regularDriverPerson/relationToClientCode
    $request$vehicle$regularDriverPerson$relationToClientCode,
    -- Field request/vehicle/regularDriverPerson/rsaResident at /request/vehicle/regularDriverPerson/rsaResident
    $request$vehicle$regularDriverPerson$rsaResident,
    -- Field request/vehicle/regularDriverPerson/title at /request/vehicle/regularDriverPerson/title
    $request$vehicle$regularDriverPerson$title,
    -- Field request/vehicle/regularDriverPerson/zaIdNumber at /request/vehicle/regularDriverPerson/zaIdNumber
    $request$vehicle$regularDriverPerson$zaIdNumber,
    -- Field request/vehicle/relationshipToOwner at /request/vehicle/relationshipToOwner
    $request$vehicle$relationshipToOwner,
    -- Field request/vehicle/removedFromQuote at /request/vehicle/removedFromQuote
    $request$vehicle$removedFromQuote,
    -- Field request/vehicle/require_svr at /request/vehicle/require_svr
    $request$vehicle$require_svr,
    -- Field request/vehicle/retailPrice at /request/vehicle/retailPrice
    $request$vehicle$retailPrice,
    -- Field request/vehicle/risk_level at /request/vehicle/risk_level
    $request$vehicle$risk_level,
    -- Field request/vehicle/sold_by at /request/vehicle/sold_by
    $request$vehicle$sold_by,
    -- Field request/vehicle/sold_by/date at /request/vehicle/sold_by/date
    $request$vehicle$sold_by$date,
    -- Field request/vehicle/sold_by/email at /request/vehicle/sold_by/email
    $request$vehicle$sold_by$email,
    -- Field request/vehicle/sold_by/entity at /request/vehicle/sold_by/entity
    $request$vehicle$sold_by$entity,
    -- Field request/vehicle/sold_by/platform at /request/vehicle/sold_by/platform
    $request$vehicle$sold_by$platform,
    -- Field request/vehicle/status at /request/vehicle/status
    $request$vehicle$status,
    -- Field request/vehicle/taxi at /request/vehicle/taxi
    $request$vehicle$taxi,
    -- Field request/vehicle/telematicsInfo at /request/vehicle/telematicsInfo
    $request$vehicle$telematicsInfo,
    -- Field request/vehicle/telematicsInfo/sendMileageHolidayConfirmationLetter at /request/vehicle/telematicsInfo/sendMileageHolidayConfirmationLetter
    $request$vehicle$telematicsInfo$sendMileageHolidayConfirmationLetter,
    -- Field request/vehicle/telematicsInfo/telematicsDeviceInstalled at /request/vehicle/telematicsInfo/telematicsDeviceInstalled
    $request$vehicle$telematicsInfo$telematicsDeviceInstalled,
    -- Field request/vehicle/telematicsInfo/telematicsReceived at /request/vehicle/telematicsInfo/telematicsReceived
    $request$vehicle$telematicsInfo$telematicsReceived,
    -- Field request/vehicle/telematicsInfo/totalMileageAtInception at /request/vehicle/telematicsInfo/totalMileageAtInception
    $request$vehicle$telematicsInfo$totalMileageAtInception,
    -- Field request/vehicle/tracking at /request/vehicle/tracking
    $request$vehicle$tracking,
    -- Field request/vehicle/trackingDeviceMake at /request/vehicle/trackingDeviceMake
    $request$vehicle$trackingDeviceMake,
    -- Field request/vehicle/trackingDeviceModel at /request/vehicle/trackingDeviceModel
    $request$vehicle$trackingDeviceModel,
    -- Field request/vehicle/updatedAt at /request/vehicle/updatedAt
    $request$vehicle$updatedAt,
    -- Field request/vehicle/use at /request/vehicle/use
    $request$vehicle$use,
    -- Field request/vehicle/user_id at /request/vehicle/user_id
    $request$vehicle$user_id,
    -- Field request/vehicle/vehicleId at /request/vehicle/vehicleId
    $request$vehicle$vehicleId,
    -- Field request/vehicle/vehicleOwnerPerson at /request/vehicle/vehicleOwnerPerson
    $request$vehicle$vehicleOwnerPerson,
    -- Field request/vehicle/vehicleOwnerPerson/age at /request/vehicle/vehicleOwnerPerson/age
    $request$vehicle$vehicleOwnerPerson$age,
    -- Field request/vehicle/vehicleOwnerPerson/cellphoneNumber at /request/vehicle/vehicleOwnerPerson/cellphoneNumber
    $request$vehicle$vehicleOwnerPerson$cellphoneNumber,
    -- Field request/vehicle/vehicleOwnerPerson/dateOfBirth at /request/vehicle/vehicleOwnerPerson/dateOfBirth
    $request$vehicle$vehicleOwnerPerson$dateOfBirth,
    -- Field request/vehicle/vehicleOwnerPerson/emailAddress at /request/vehicle/vehicleOwnerPerson/emailAddress
    $request$vehicle$vehicleOwnerPerson$emailAddress,
    -- Field request/vehicle/vehicleOwnerPerson/firstName at /request/vehicle/vehicleOwnerPerson/firstName
    $request$vehicle$vehicleOwnerPerson$firstName,
    -- Field request/vehicle/vehicleOwnerPerson/gender at /request/vehicle/vehicleOwnerPerson/gender
    $request$vehicle$vehicleOwnerPerson$gender,
    -- Field request/vehicle/vehicleOwnerPerson/lastName at /request/vehicle/vehicleOwnerPerson/lastName
    $request$vehicle$vehicleOwnerPerson$lastName,
    -- Field request/vehicle/vehicleOwnerPerson/maritalStatusCode at /request/vehicle/vehicleOwnerPerson/maritalStatusCode
    $request$vehicle$vehicleOwnerPerson$maritalStatusCode,
    -- Field request/vehicle/vehicleOwnerPerson/personType at /request/vehicle/vehicleOwnerPerson/personType
    $request$vehicle$vehicleOwnerPerson$personType,
    -- Field request/vehicle/vehicleOwnerPerson/relationToClientCode at /request/vehicle/vehicleOwnerPerson/relationToClientCode
    $request$vehicle$vehicleOwnerPerson$relationToClientCode,
    -- Field request/vehicle/vehicleOwnerPerson/rsaResident at /request/vehicle/vehicleOwnerPerson/rsaResident
    $request$vehicle$vehicleOwnerPerson$rsaResident,
    -- Field request/vehicle/vehicleOwnerPerson/title at /request/vehicle/vehicleOwnerPerson/title
    $request$vehicle$vehicleOwnerPerson$title,
    -- Field request/vehicle/vehicleOwnerPerson/zaIdNumber at /request/vehicle/vehicleOwnerPerson/zaIdNumber
    $request$vehicle$vehicleOwnerPerson$zaIdNumber,
    -- Field request/vehicle/vin at /request/vehicle/vin
    $request$vehicle$vin,
    -- Field request/vehicle/vinNo at /request/vehicle/vinNo
    $request$vehicle$vinNo,
    -- Field request/vehicle/vinNumber at /request/vehicle/vinNumber
    $request$vehicle$vinNumber,
    -- Field request/vehicle/weight at /request/vehicle/weight
    $request$vehicle$weight,
    -- Field request/vehicle/wyze_object_no at /request/vehicle/wyze_object_no
    $request$vehicle$wyze_object_no,
    -- Field request/vehicle/year at /request/vehicle/year
    $request$vehicle$year,
    -- Field request/vehicleId at /request/vehicleId
    $request$vehicleId,
    -- Field request/voiceNote at /request/voiceNote
    $request$voiceNote,
    -- Field request/zaIdNumber at /request/zaIdNumber
    $request$zaIdNumber,
    -- Field response at /response
    $response,
    -- Field response/allRiskCover at /response/allRiskCover
    $response$allRiskCover,
    -- Field response/bankDetails.accountHolderTiaKey at /response/bankDetails.accountHolderTiaKey
    $p::(response/bankDetails.accountHolderTiaKey),
    -- Field response/bankDetails.accountType at /response/bankDetails.accountType
    $p::(response/bankDetails.accountType),
    -- Field response/cancelDate at /response/cancelDate
    $response$cancelDate,
    -- Field response/cashbackAmount at /response/cashbackAmount
    $response$cashbackAmount,
    -- Field response/cashbackDate at /response/cashbackDate
    $response$cashbackDate,
    -- Field response/claimEventNumber at /response/claimEventNumber
    $response$claimEventNumber,
    -- Field response/claimNumber at /response/claimNumber
    $response$claimNumber,
    -- Field response/cover at /response/cover
    $response$cover,
    -- Field response/coverEndDate at /response/coverEndDate
    $response$coverEndDate,
    -- Field response/coverStartDate at /response/coverStartDate
    $response$coverStartDate,
    -- Field response/data at /response/data
    $response$data,
    -- Field response/data/age at /response/data/age
    $response$data$age,
    -- Field response/data/allRiskCover at /response/data/allRiskCover
    $response$data$allRiskCover,
    -- Field response/data/alternatePhone at /response/data/alternatePhone
    $response$data$alternatePhone,
    -- Field response/data/bankAccount at /response/data/bankAccount
    $response$data$bankAccount,
    -- Field response/data/bankAccount/accountHolder at /response/data/bankAccount/accountHolder
    $response$data$bankAccount$accountHolder,
    -- Field response/data/bankAccount/accountNo at /response/data/bankAccount/accountNo
    $response$data$bankAccount$accountNo,
    -- Field response/data/bankAccount/accountType at /response/data/bankAccount/accountType
    $response$data$bankAccount$accountType,
    -- Field response/data/bankAccount/bankId at /response/data/bankAccount/bankId
    $response$data$bankAccount$bankId,
    -- Field response/data/bankAccount/bankName at /response/data/bankAccount/bankName
    $response$data$bankAccount$bankName,
    -- Field response/data/bankAccount/branchId at /response/data/bankAccount/branchId
    $response$data$bankAccount$branchId,
    -- Field response/data/businessTiaKey at /response/data/businessTiaKey
    $response$data$businessTiaKey,
    -- Field response/data/cancelDate at /response/data/cancelDate
    $response$data$cancelDate,
    -- Field response/data/carCover at /response/data/carCover
    $response$data$carCover,
    -- Field response/data/cellphoneNumber at /response/data/cellphoneNumber
    $response$data$cellphoneNumber,
    -- Field response/data/claimEventNumber at /response/data/claimEventNumber
    $response$data$claimEventNumber,
    -- Field response/data/claimFraudRejection at /response/data/claimFraudRejection
    $response$data$claimFraudRejection,
    -- Field response/data/claimNumber at /response/data/claimNumber
    $response$data$claimNumber,
    -- Field response/data/claimsDates at /response/data/claimsDates
    $response$data$claimsDates,
    -- Field response/data/code at /response/data/code
    $response$data$code,
    -- Field response/data/convictionDetails at /response/data/convictionDetails
    $response$data$convictionDetails,
    -- Field response/data/convictionDetails/date at /response/data/convictionDetails/date
    $response$data$convictionDetails$date,
    -- Field response/data/convictionDetails/details at /response/data/convictionDetails/details
    $response$data$convictionDetails$details,
    -- Field response/data/convictionDetails/type at /response/data/convictionDetails/type
    $response$data$convictionDetails$type,
    -- Field response/data/convictionDetails/yesOrNo at /response/data/convictionDetails/yesOrNo
    $response$data$convictionDetails$yesOrNo,
    -- Field response/data/convictions at /response/data/convictions
    $response$data$convictions,
    -- Field response/data/convictions/yesOrNo at /response/data/convictions/yesOrNo
    $response$data$convictions$yesOrNo,
    -- Field response/data/cover at /response/data/cover
    $response$data$cover,
    -- Field response/data/coverEndDate at /response/data/coverEndDate
    $response$data$coverEndDate,
    -- Field response/data/coverStartDate at /response/data/coverStartDate
    $response$data$coverStartDate,
    -- Field response/data/creditScore at /response/data/creditScore
    $response$data$creditScore,
    -- Field response/data/currentlyInsured at /response/data/currentlyInsured
    $response$data$currentlyInsured,
    -- Field response/data/dateOfBirth at /response/data/dateOfBirth
    $response$data$dateOfBirth,
    -- Field response/data/debitOrderDay at /response/data/debitOrderDay
    $response$data$debitOrderDay,
    -- Field response/data/debtReview at /response/data/debtReview
    $response$data$debtReview,
    -- Field response/data/declinatureMessages at /response/data/declinatureMessages
    $response$data$declinatureMessages,
    -- Field response/data/declined at /response/data/declined
    $response$data$declined,
    -- Field response/data/disability at /response/data/disability
    $response$data$disability,
    -- Field response/data/disabilityReason at /response/data/disabilityReason
    $response$data$disabilityReason,
    -- Field response/data/discountPercentage at /response/data/discountPercentage
    $response$data$discountPercentage,
    -- Field response/data/driverRelationToBusiness at /response/data/driverRelationToBusiness
    $response$data$driverRelationToBusiness,
    -- Field response/data/educationLevel at /response/data/educationLevel
    $response$data$educationLevel,
    -- Field response/data/emailAddress at /response/data/emailAddress
    $response$data$emailAddress,
    -- Field response/data/employmentStatus at /response/data/employmentStatus
    $response$data$employmentStatus,
    -- Field response/data/endorsementInEffectDate at /response/data/endorsementInEffectDate
    $response$data$endorsementInEffectDate,
    -- Field response/data/error at /response/data/error
    $response$data$error,
    -- Field response/data/error/code at /response/data/error/code
    $response$data$error$code,
    -- Field response/data/error/errno at /response/data/error/errno
    $response$data$error$errno,
    -- Field response/data/error/message at /response/data/error/message
    $response$data$error$message,
    -- Field response/data/error/name at /response/data/error/name
    $response$data$error$name,
    -- Field response/data/error/requestId at /response/data/error/requestId
    $response$data$error$requestId,
    -- Field response/data/error/retryDelay at /response/data/error/retryDelay
    $response$data$error$retryDelay,
    -- Field response/data/error/retryable at /response/data/error/retryable
    $response$data$error$retryable,
    -- Field response/data/error/statusCode at /response/data/error/statusCode
    $response$data$error$statusCode,
    -- Field response/data/error/time at /response/data/error/time
    $response$data$error$time,
    -- Field response/data/error/type at /response/data/error/type
    $response$data$error$type,
    -- Field response/data/errorCode at /response/data/errorCode
    $response$data$errorCode,
    -- Field response/data/errorMessages at /response/data/errorMessages
    $response$data$errorMessages,
    -- Field response/data/excesses at /response/data/excesses
    $response$data$excesses,
    -- Field response/data/externalReferenceId at /response/data/externalReferenceId
    $response$data$externalReferenceId,
    -- Field response/data/field at /response/data/field
    $response$data$field,
    -- Field response/data/firstName at /response/data/firstName
    $response$data$firstName,
    -- Field response/data/flexibleDebitDate at /response/data/flexibleDebitDate
    $response$data$flexibleDebitDate,
    -- Field response/data/gender at /response/data/gender
    $response$data$gender,
    -- Field response/data/hasPendingCases at /response/data/hasPendingCases
    $response$data$hasPendingCases,
    -- Field response/data/hawkAlertDate at /response/data/hawkAlertDate
    $response$data$hawkAlertDate,
    -- Field response/data/homeContentsCover at /response/data/homeContentsCover
    $response$data$homeContentsCover,
    -- Field response/data/httpStatusCode at /response/data/httpStatusCode
    $response$data$httpStatusCode,
    -- Field response/data/id at /response/data/id
    $response$data$id,
    -- Field response/data/idType at /response/data/idType
    $response$data$idType,
    -- Field response/data/inEffectDate at /response/data/inEffectDate
    $response$data$inEffectDate,
    -- Field response/data/informationExchangeConsent at /response/data/informationExchangeConsent
    $response$data$informationExchangeConsent,
    -- Field response/data/innerTiaError at /response/data/innerTiaError
    $response$data$innerTiaError,
    -- Field response/data/insolvent at /response/data/insolvent
    $response$data$insolvent,
    -- Field response/data/insurance at /response/data/insurance
    $response$data$insurance,
    -- Field response/data/insurance/declined at /response/data/insurance/declined
    $response$data$insurance$declined,
    -- Field response/data/insurance/prevInsYearFrom at /response/data/insurance/prevInsYearFrom
    $response$data$insurance$prevInsYearFrom,
    -- Field response/data/insurance/prevInsYearTo at /response/data/insurance/prevInsYearTo
    $response$data$insurance$prevInsYearTo,
    -- Field response/data/insurance/previousInsurer at /response/data/insurance/previousInsurer
    $response$data$insurance$previousInsurer,
    -- Field response/data/insurance/prvInsYrs at /response/data/insurance/prvInsYrs
    $response$data$insurance$prvInsYrs,
    -- Field response/data/insurance/yesOrNo at /response/data/insurance/yesOrNo
    $response$data$insurance$yesOrNo,
    -- Field response/data/insuranceDeclined at /response/data/insuranceDeclined
    $response$data$insuranceDeclined,
    -- Field response/data/insuranceType at /response/data/insuranceType
    $response$data$insuranceType,
    -- Field response/data/insurerCode at /response/data/insurerCode
    $response$data$insurerCode,
    -- Field response/data/isCharged at /response/data/isCharged
    $response$data$isCharged,
    -- Field response/data/isPartialCustomer at /response/data/isPartialCustomer
    $response$data$isPartialCustomer,
    -- Field response/data/judgementAmount at /response/data/judgementAmount
    $response$data$judgementAmount,
    -- Field response/data/judgementDetails at /response/data/judgementDetails
    $response$data$judgementDetails,
    -- Field response/data/judgements at /response/data/judgements
    $response$data$judgements,
    -- Field response/data/lapseScoreV3 at /response/data/lapseScoreV3
    $response$data$lapseScoreV3,
    -- Field response/data/lapseScoreV4 at /response/data/lapseScoreV4
    $response$data$lapseScoreV4,
    -- Field response/data/lastModifiedDate at /response/data/lastModifiedDate
    $response$data$lastModifiedDate,
    -- Field response/data/lastName at /response/data/lastName
    $response$data$lastName,
    -- Field response/data/leadershipStatus at /response/data/leadershipStatus
    $response$data$leadershipStatus,
    -- Field response/data/licenseDate at /response/data/licenseDate
    $response$data$licenseDate,
    -- Field response/data/licenseEndorsementDetails at /response/data/licenseEndorsementDetails
    $response$data$licenseEndorsementDetails,
    -- Field response/data/licenseEndorsements at /response/data/licenseEndorsements
    $response$data$licenseEndorsements,
    -- Field response/data/licenseRestrictionDetails at /response/data/licenseRestrictionDetails
    $response$data$licenseRestrictionDetails,
    -- Field response/data/licenseRestrictions at /response/data/licenseRestrictions
    $response$data$licenseRestrictions,
    -- Field response/data/licenseTypeCode at /response/data/licenseTypeCode
    $response$data$licenseTypeCode,
    -- Field response/data/maritalStatusCode at /response/data/maritalStatusCode
    $response$data$maritalStatusCode,
    -- Field response/data/marketingCampaignId at /response/data/marketingCampaignId
    $response$data$marketingCampaignId,
    -- Field response/data/marketingConsent at /response/data/marketingConsent
    $response$data$marketingConsent,
    -- Field response/data/messageCollection at /response/data/messageCollection
    $response$data$messageCollection,
    -- Field response/data/messageCollection/messageDetail at /response/data/messageCollection/messageDetail
    $response$data$messageCollection$messageDetail,
    -- Field response/data/messages at /response/data/messages
    $response$data$messages,
    -- Field response/data/meta at /response/data/meta
    $response$data$meta,
    -- Field response/data/monthlyIncome at /response/data/monthlyIncome
    $response$data$monthlyIncome,
    -- Field response/data/motorLossCount at /response/data/motorLossCount
    $response$data$motorLossCount,
    -- Field response/data/mustPrintPolicyDocuments at /response/data/mustPrintPolicyDocuments
    $response$data$mustPrintPolicyDocuments,
    -- Field response/data/notificationType at /response/data/notificationType
    $response$data$notificationType,
    -- Field response/data/numberOfJudgements at /response/data/numberOfJudgements
    $response$data$numberOfJudgements,
    -- Field response/data/occupationIncomeGroupCode at /response/data/occupationIncomeGroupCode
    $response$data$occupationIncomeGroupCode,
    -- Field response/data/partyId at /response/data/partyId
    $response$data$partyId,
    -- Field response/data/passportNumber at /response/data/passportNumber
    $response$data$passportNumber,
    -- Field response/data/paymentDetailsId at /response/data/paymentDetailsId
    $response$data$paymentDetailsId,
    -- Field response/data/pendingCaseType at /response/data/pendingCaseType
    $response$data$pendingCaseType,
    -- Field response/data/personType at /response/data/personType
    $response$data$personType,
    -- Field response/data/physicalAddress at /response/data/physicalAddress
    $response$data$physicalAddress,
    -- Field response/data/physicalAddress/addressType at /response/data/physicalAddress/addressType
    $response$data$physicalAddress$addressType,
    -- Field response/data/physicalAddress/afrigisCode at /response/data/physicalAddress/afrigisCode
    $response$data$physicalAddress$afrigisCode,
    -- Field response/data/physicalAddress/agencyBoxNo at /response/data/physicalAddress/agencyBoxNo
    $response$data$physicalAddress$agencyBoxNo,
    -- Field response/data/physicalAddress/avgIncomeClass at /response/data/physicalAddress/avgIncomeClass
    $response$data$physicalAddress$avgIncomeClass,
    -- Field response/data/physicalAddress/boxCode at /response/data/physicalAddress/boxCode
    $response$data$physicalAddress$boxCode,
    -- Field response/data/physicalAddress/buildingName at /response/data/physicalAddress/buildingName
    $response$data$physicalAddress$buildingName,
    -- Field response/data/physicalAddress/coords at /response/data/physicalAddress/coords
    $response$data$physicalAddress$coords,
    -- Field response/data/physicalAddress/country at /response/data/physicalAddress/country
    $response$data$physicalAddress$country,
    -- Field response/data/physicalAddress/countryCode at /response/data/physicalAddress/countryCode
    $response$data$physicalAddress$countryCode,
    -- Field response/data/physicalAddress/dayPopDensityCategory at /response/data/physicalAddress/dayPopDensityCategory
    $response$data$physicalAddress$dayPopDensityCategory,
    -- Field response/data/physicalAddress/dwellingNo at /response/data/physicalAddress/dwellingNo
    $response$data$physicalAddress$dwellingNo,
    -- Field response/data/physicalAddress/footPrintSize at /response/data/physicalAddress/footPrintSize
    $response$data$physicalAddress$footPrintSize,
    -- Field response/data/physicalAddress/isComplexOrFlat at /response/data/physicalAddress/isComplexOrFlat
    $response$data$physicalAddress$isComplexOrFlat,
    -- Field response/data/physicalAddress/lat at /response/data/physicalAddress/lat
    $response$data$physicalAddress$lat,
    -- Field response/data/physicalAddress/lon at /response/data/physicalAddress/lon
    $response$data$physicalAddress$lon,
    -- Field response/data/physicalAddress/nightPopDensityCategory at /response/data/physicalAddress/nightPopDensityCategory
    $response$data$physicalAddress$nightPopDensityCategory,
    -- Field response/data/physicalAddress/poBoxNumber at /response/data/physicalAddress/poBoxNumber
    $response$data$physicalAddress$poBoxNumber,
    -- Field response/data/physicalAddress/postArea at /response/data/physicalAddress/postArea
    $response$data$physicalAddress$postArea,
    -- Field response/data/physicalAddress/postalCode at /response/data/physicalAddress/postalCode
    $response$data$physicalAddress$postalCode,
    -- Field response/data/physicalAddress/postalRegion at /response/data/physicalAddress/postalRegion
    $response$data$physicalAddress$postalRegion,
    -- Field response/data/physicalAddress/privateBagNo at /response/data/physicalAddress/privateBagNo
    $response$data$physicalAddress$privateBagNo,
    -- Field response/data/physicalAddress/propertyKey at /response/data/physicalAddress/propertyKey
    $response$data$physicalAddress$propertyKey,
    -- Field response/data/physicalAddress/province at /response/data/physicalAddress/province
    $response$data$physicalAddress$province,
    -- Field response/data/physicalAddress/sectionId at /response/data/physicalAddress/sectionId
    $response$data$physicalAddress$sectionId,
    -- Field response/data/physicalAddress/street at /response/data/physicalAddress/street
    $response$data$physicalAddress$street,
    -- Field response/data/physicalAddress/streetCode at /response/data/physicalAddress/streetCode
    $response$data$physicalAddress$streetCode,
    -- Field response/data/physicalAddress/streetNo at /response/data/physicalAddress/streetNo
    $response$data$physicalAddress$streetNo,
    -- Field response/data/physicalAddress/subplaceId at /response/data/physicalAddress/subplaceId
    $response$data$physicalAddress$subplaceId,
    -- Field response/data/physicalAddress/suburb at /response/data/physicalAddress/suburb
    $response$data$physicalAddress$suburb,
    -- Field response/data/physicalAddress/town at /response/data/physicalAddress/town
    $response$data$physicalAddress$town,
    -- Field response/data/physicalAddress/unitNo at /response/data/physicalAddress/unitNo
    $response$data$physicalAddress$unitNo,
    -- Field response/data/physicalAddress/unitNumber at /response/data/physicalAddress/unitNumber
    $response$data$physicalAddress$unitNumber,
    -- Field response/data/physicalAddress/villageName at /response/data/physicalAddress/villageName
    $response$data$physicalAddress$villageName,
    -- Field response/data/policyCorrespondenceType at /response/data/policyCorrespondenceType
    $response$data$policyCorrespondenceType,
    -- Field response/data/policyHolderPersonId at /response/data/policyHolderPersonId
    $response$data$policyHolderPersonId,
    -- Field response/data/policyNumber at /response/data/policyNumber
    $response$data$policyNumber,
    -- Field response/data/postalAddress at /response/data/postalAddress
    $response$data$postalAddress,
    -- Field response/data/postalAddress/addressType at /response/data/postalAddress/addressType
    $response$data$postalAddress$addressType,
    -- Field response/data/postalAddress/afrigisCode at /response/data/postalAddress/afrigisCode
    $response$data$postalAddress$afrigisCode,
    -- Field response/data/postalAddress/agencyBoxNo at /response/data/postalAddress/agencyBoxNo
    $response$data$postalAddress$agencyBoxNo,
    -- Field response/data/postalAddress/avgIncomeClass at /response/data/postalAddress/avgIncomeClass
    $response$data$postalAddress$avgIncomeClass,
    -- Field response/data/postalAddress/boxCode at /response/data/postalAddress/boxCode
    $response$data$postalAddress$boxCode,
    -- Field response/data/postalAddress/buildingName at /response/data/postalAddress/buildingName
    $response$data$postalAddress$buildingName,
    -- Field response/data/postalAddress/coords at /response/data/postalAddress/coords
    $response$data$postalAddress$coords,
    -- Field response/data/postalAddress/country at /response/data/postalAddress/country
    $response$data$postalAddress$country,
    -- Field response/data/premium at /response/data/premium
    $response$data$premium,
    -- Field response/data/premiumDeductionsConsent at /response/data/premiumDeductionsConsent
    $response$data$premiumDeductionsConsent,
    -- Field response/data/prevIns at /response/data/prevIns
    $response$data$prevIns,
    -- Field response/data/prevInsYearFrom at /response/data/prevInsYearFrom
    $response$data$prevInsYearFrom,
    -- Field response/data/prevInsYearTo at /response/data/prevInsYearTo
    $response$data$prevInsYearTo,
    -- Field response/data/previousLoss at /response/data/previousLoss
    $response$data$previousLoss,
    -- Field response/data/productCode at /response/data/productCode
    $response$data$productCode,
    -- Field response/data/prvInsLosses at /response/data/prvInsLosses
    $response$data$prvInsLosses,
    -- Field response/data/prvInsYrs at /response/data/prvInsYrs
    $response$data$prvInsYrs,
    -- Field response/data/reason at /response/data/reason
    $response$data$reason,
    -- Field response/data/referralMessages at /response/data/referralMessages
    $response$data$referralMessages,
    -- Field response/data/referred at /response/data/referred
    $response$data$referred,
    -- Field response/data/registeredOwner at /response/data/registeredOwner
    $response$data$registeredOwner,
    -- Field response/data/relationToBusiness at /response/data/relationToBusiness
    $response$data$relationToBusiness,
    -- Field response/data/relationToClientCode at /response/data/relationToClientCode
    $response$data$relationToClientCode,
    -- Field response/data/renewalDate at /response/data/renewalDate
    $response$data$renewalDate,
    -- Field response/data/resource at /response/data/resource
    $response$data$resource,
    -- Field response/data/resources at /response/data/resources
    $response$data$resources,
    -- Field response/data/rsaResident at /response/data/rsaResident
    $response$data$rsaResident,
    -- Field response/data/savePolicyToDatabase at /response/data/savePolicyToDatabase
    $response$data$savePolicyToDatabase,
    -- Field response/data/sequenceNo at /response/data/sequenceNo
    $response$data$sequenceNo,
    -- Field response/data/smoker at /response/data/smoker
    $response$data$smoker,
    -- Field response/data/status at /response/data/status
    $response$data$status,
    -- Field response/data/success at /response/data/success
    $response$data$success,
    -- Field response/data/title at /response/data/title
    $response$data$title,
    -- Field response/data/totalPremium at /response/data/totalPremium
    $response$data$totalPremium,
    -- Field response/data/underAdmin at /response/data/underAdmin
    $response$data$underAdmin,
    -- Field response/data/validationMessages at /response/data/validationMessages
    $response$data$validationMessages,
    -- Field response/data/warningMessages at /response/data/warningMessages
    $response$data$warningMessages,
    -- Field response/data/yearsWithoutClaims at /response/data/yearsWithoutClaims
    $response$data$yearsWithoutClaims,
    -- Field response/data/zaIdNumber at /response/data/zaIdNumber
    $response$data$zaIdNumber,
    -- Field response/declinatureMessages at /response/declinatureMessages
    $response$declinatureMessages,
    -- Field response/declined at /response/declined
    $response$declined,
    -- Field response/endorsementInEffectDate at /response/endorsementInEffectDate
    $response$endorsementInEffectDate,
    -- Field response/error at /response/error
    $response$error,
    -- Field response/error/message at /response/error/message
    $response$error$message,
    -- Field response/errorCode at /response/errorCode
    $response$errorCode,
    -- Field response/errorMessages at /response/errorMessages
    $response$errorMessages,
    -- Field response/errors at /response/errors
    $response$errors,
    -- Field response/errors/declines at /response/errors/declines
    $response$errors$declines,
    -- Field response/errors/generic at /response/errors/generic
    $response$errors$generic,
    -- Field response/errors/validations at /response/errors/validations
    $response$errors$validations,
    -- Field response/errors/warnings at /response/errors/warnings
    $response$errors$warnings,
    -- Field response/excesses at /response/excesses
    $response$excesses,
    -- Field response/existingPolicyNo at /response/existingPolicyNo
    $response$existingPolicyNo,
    -- Field response/field at /response/field
    $response$field,
    -- Field response/firstDeductionDate at /response/firstDeductionDate
    $response$firstDeductionDate,
    -- Field response/hasCancelledPolicy at /response/hasCancelledPolicy
    $response$hasCancelledPolicy,
    -- Field response/hasExistingPolicy at /response/hasExistingPolicy
    $response$hasExistingPolicy,
    -- Field response/hasExistingQuote at /response/hasExistingQuote
    $response$hasExistingQuote,
    -- Field response/homeContentsCover at /response/homeContentsCover
    $response$homeContentsCover,
    -- Field response/httpStatusCode at /response/httpStatusCode
    $response$httpStatusCode,
    -- Field response/innerTiaError at /response/innerTiaError
    $response$innerTiaError,
    -- Field response/insuranceType at /response/insuranceType
    $response$insuranceType,
    -- Field response/insurerCode at /response/insurerCode
    $response$insurerCode,
    -- Field response/lastModifiedDate at /response/lastModifiedDate
    $response$lastModifiedDate,
    -- Field response/message at /response/message
    $response$message,
    -- Field response/mustPrintPolicyDocuments at /response/mustPrintPolicyDocuments
    $response$mustPrintPolicyDocuments,
    -- Field response/originalPolicyPremium at /response/originalPolicyPremium
    $response$originalPolicyPremium,
    -- Field response/paymentDetailsId at /response/paymentDetailsId
    $response$paymentDetailsId,
    -- Field response/physicalAddressTiaKey at /response/physicalAddressTiaKey
    $response$physicalAddressTiaKey,
    -- Field response/policyHolderPersonId at /response/policyHolderPersonId
    $response$policyHolderPersonId,
    -- Field response/policyInceptionDate at /response/policyInceptionDate
    $response$policyInceptionDate,
    -- Field response/policyLineObjects at /response/policyLineObjects
    $response$policyLineObjects,
    -- Field response/policyNo at /response/policyNo
    $response$policyNo,
    -- Field response/policyNumber at /response/policyNumber
    $response$policyNumber,
    -- Field response/policyPremium at /response/policyPremium
    $response$policyPremium,
    -- Field response/proRataPolicyPremium at /response/proRataPolicyPremium
    $response$proRataPolicyPremium,
    -- Field response/reason at /response/reason
    $response$reason,
    -- Field response/referralMessages at /response/referralMessages
    $response$referralMessages,
    -- Field response/referrals at /response/referrals
    $response$referrals,
    -- Field response/referred at /response/referred
    $response$referred,
    -- Field response/renewalDate at /response/renewalDate
    $response$renewalDate,
    -- Field response/response_code at /response/response_code
    $response$response_code,
    -- Field response/savePolicyToDatabase at /response/savePolicyToDatabase
    $response$savePolicyToDatabase,
    -- Field response/sequenceNo at /response/sequenceNo
    $response$sequenceNo,
    -- Field response/solePropTiaKey at /response/solePropTiaKey
    $response$solePropTiaKey,
    -- Field response/status at /response/status
    $response$status,
    -- Field response/tiaKey at /response/tiaKey
    $response$tiaKey,
    -- Field response/totalPremium at /response/totalPremium
    $response$totalPremium,
    -- Field response/updatedPolicyLineObjNo at /response/updatedPolicyLineObjNo
    $response$updatedPolicyLineObjNo,
    -- Field response/validationMessages at /response/validationMessages
    $response$validationMessages,
    -- Field response/warningMessages at /response/warningMessages
    $response$warningMessages,
    -- Field rsaResident at /rsaResident
    $rsaResident,
    -- Field scriptUpdate at /scriptUpdate
    $scriptUpdate,
    -- Field title at /title
    $title,
    -- Field type at /type
    $type,
    -- Field underAdmin at /underAdmin
    $underAdmin,
    -- Field updatedAt at /updatedAt
    $updatedAt,
    -- Field url at /url
    $url,
    -- Field user_id at /user_id
    $user_id,
    -- Field zaIdNumber at /zaIdNumber
    $zaIdNumber
;